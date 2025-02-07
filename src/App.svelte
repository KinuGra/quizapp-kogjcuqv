<script>
    import AnswerButton from "./AnswerButton.svelte";
    import "./app.css";
  
    let currentScore = 0;
    let renzokuSeikai = 0;

    let mondai = "鮪";
    let seikai = "まぐろ";
    let taku = ["ひらめ", "かれい", "まぐろ", "ぶり", "くじら"];

    function answerButtonClicked(isCorrect){
      if(isCorrect){
        renzokuSeikai += 1;
        currentScore += renzokuSeikai;
      }
      else{
        renzokuSeikai = 0;
      }
    }
</script>

<main class = "flex flex-col h-svh">
  <!-- メニューバー -->
  <div class="bg-red-200 flex justify-around text-xl font-bold p-3">
    <div>スコア:{currentScore}</div>
    <div>連続正解数:{renzokuSeikai}</div>
  </div>

  <!-- 問題 -->
  <div class="bg-green-200 text-center text-4xl py-4">{mondai}</div>

  <!-- 選択肢 -->
  <div class="bg-blue-200 flex flex-col justify-around flex-grow items-center">
    <AnswerButton on:click={() => answerButtonClicked(seikai===taku[0])}>{taku[0]}</AnswerButton>
    <AnswerButton on:click={() => answerButtonClicked(seikai===taku[1])}>{taku[1]}</AnswerButton>
    <AnswerButton on:click={() => answerButtonClicked(seikai===taku[2])}>{taku[2]}</AnswerButton>
    <AnswerButton on:click={() => answerButtonClicked(seikai===taku[3])}>{taku[3]}</AnswerButton>
    <AnswerButton on:click={() => answerButtonClicked(seikai===taku[4])}>{taku[4]}</AnswerButton>
  </div>
</main>
