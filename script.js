// 主要なDOM要素をあらかじめ取得
const analyzeButton = document.getElementById('analyzeButton');
const buttonText = document.querySelector('.button-text');
const spinner = document.getElementById('spinner');
const resultsContainer = document.getElementById('resultsContainer');

// ボタンクリックイベント
analyzeButton.addEventListener('click', analyzeText);

function setLoadingState(isLoading) {
    if (isLoading) {
        analyzeButton.disabled = true;
        buttonText.textContent = '分析中...';
        spinner.style.display = 'block';
        resultsContainer.style.display = 'none';
        resultsContainer.classList.remove('visible');
    } else {
        analyzeButton.disabled = false;
        buttonText.textContent = '分析する';
        spinner.style.display = 'none';
    }
}

function displayResults() {
    resultsContainer.style.display = 'grid';
    // 少し遅延させてから表示クラスを付与し、CSSアニメーションを発火させる
    setTimeout(() => {
        resultsContainer.classList.add('visible');
    }, 10);
}

// メインの分析処理関数
function analyzeText() {
    const text = document.getElementById('textInput').value;
    if (!text) {
        alert('テキストを入力してください。');
        return;
    }

    setLoadingState(true);

    kuromoji.builder({ dicPath: 'https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict' }).build((err, tokenizer) => {
        if (err) {
            console.error(err);
            alert('分析エンジンの初期化に失敗しました。');
            setLoadingState(false);
            return;
        }

        const tokens = tokenizer.tokenize(text);

        // --- 1. 頻出単語の集計 ---
        const wordCounts = countWords(tokens);
        
        // --- 2. ワードクラウドの描画 ---
        drawWordCloud(wordCounts);
        
        // --- 3. 頻出単語ランキングの表示 ---
        displayRanking(wordCounts);

        // --- 4. 感情分析 ---
        analyzeSentiment(tokens);
        
        setLoadingState(false);
        displayResults();
    });
}

// (countWords, drawWordCloud, displayRanking, analyzeSentiment の各関数は前回と同じなので省略)
// (前回のscript.jsから、これらの4つの関数をこの下にコピー＆ペーストしてください)

// ↓↓↓↓ 前回のscript.jsから以下の4つの関数をコピーして貼り付け ↓↓↓↓

// 頻出単語をカウントする関数
function countWords(tokens) {
    const targetPos = ['名詞', '動詞', '形容詞'];
    const filteredTokens = tokens.filter(token => targetPos.includes(token.pos));
    const stopWords = new Set(['する', 'いる', 'ある', 'なる', '思う', '言う', 'こと', 'もの', 'よう', 'ため', 'これ', 'それ', 'あれ']);
    const wordCounts = filteredTokens.reduce((acc, token) => {
        const word = token.basic_form;
        if (!stopWords.has(word) && word.length > 1) {
            acc[word] = (acc[word] || 0) + 1;
        }
        return acc;
    }, {});
    return wordCounts;
}

// ワードクラウドを描画する関数
function drawWordCloud(wordCounts) {
    const list = Object.entries(wordCounts).map(([text, weight]) => [text, weight]);
    if (list.length === 0) {
        document.getElementById('wordCloudCanvas').getContext('2d').clearRect(0,0,600,400); // キャンバスをクリア
        return;
    }
    list.sort(() => Math.random() - 0.5);
    WordCloud(document.getElementById('wordCloudCanvas'), {
        list: list,
        weightFactor: 15,
        minSize: 10,
        color: 'random-dark',
        backgroundColor: 'transparent'
    });
}

// 頻出単語ランキングを表示する関数
function displayRanking(wordCounts) {
    const rankingResult = document.getElementById('rankingResult');
    const sortedWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);
    if (sortedWords.length === 0) {
        rankingResult.innerHTML = '<p>有効な単語が見つかりませんでした。</p>';
        return;
    }
    let html = '<ul>';
    sortedWords.slice(0, 15).forEach(([word, count]) => {
        html += `<li>${word}: ${count}回</li>`;
    });
    html += '</ul>';
    rankingResult.innerHTML = html;
}

// 感情分析を実行する関数
function analyzeSentiment(tokens) {
    const sentimentDict = {
        '良い': 1, '嬉しい': 2, '楽しい': 2, '最高': 3, '素晴らしい': 3, '素敵': 2, '満足': 2,
        '悪い': -1, '悲しい': -2, 'ひどい': -2, '最悪': -3, '問題': -2, '不満': -2, '残念': -1
    };
    let score = 0;
    tokens.forEach(token => {
        const word = token.basic_form;
        if (sentimentDict[word]) {
            score += sentimentDict[word];
        }
    });
    let result = 'ニュートラル😐';
    if (score > 3) {
        result = 'とてもポジティブ😊';
    } else if (score > 0) {
        result = 'ポジティブ🙂';
    } else if (score < -3) {
        result = 'とてもネガティブ😡';
    } else if (score < 0) {
        result = 'ネガティブ🙁';
    }
    document.getElementById('sentimentResult').innerHTML = `判定: <strong>${result}</strong> (スコア: ${score})`;
}