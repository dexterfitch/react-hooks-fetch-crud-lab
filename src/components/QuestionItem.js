import React from "react";

function QuestionItem({ question, questions, setQuestions, questionNumber }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleDeleteFunction = (id) => {
    fetch("http://localhost:4000/questions/" + id, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => {
      const filteredQuestions = questions.filter(currentQuestion => {
        return currentQuestion.id !== id
      })
      setQuestions(filteredQuestions);
    })
  }

  return (
    <li>
      <h4>Question {questionNumber}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={() => handleDeleteFunction(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
