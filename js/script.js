'use strict';

var htmlForm = {
    body: document.body,
    questionListItem: [],
    questionItemText: [],
    answerList: [],

    createForm: function() {
        this.formQuestion = document.createElement('form');
        this.formQuestion.classList.add('formQuestion');
        this.body.appendChild(this.formQuestion);
    },

    createTitle: function() {
      this.headerTitle = document.createElement('h1');
      this.headerTitle.classList.add('headerTitle');
      this.headerTitle.innerHTML = 'Тест по программированию';
      this.formQuestion.appendChild(this.headerTitle)
    },

    createQuestionList: function() {
        this.questionList = document.createElement('ol');
        this.questionList.classList.add('questionList');
        this.formQuestion.appendChild(this.questionList);

        for (var i = 0; i < listComponents.length; i++) {
            this.createQuestionListItem(i);
        }
    },

    createQuestionListItem: function(i) {
        this.questionListItem[i] = document.createElement('li');
        this.questionListItem[i].classList.add('questionListItem');
        this.questionList.appendChild(this.questionListItem[i]);

        this.questionItemText[i] = document.createElement('h2');
        this.questionItemText[i].classList.add('questionItemText');
        this.questionItemText[i].innerHTML = listComponents[i].question;
        this.questionListItem[i].appendChild(this.questionItemText[i]);

        this.createAnswerList(i);

    },

    createAnswerList: function(i) {
        this.answerList[i] = document.createElement('ul');
        this.answerList[i].classList.add('answerList');
        this.questionListItem[i].appendChild(this.answerList[i]);

        for (var j = 0; j < listComponents[i].answer.length; j++) {
            this.createAnswerListItem(i, j);
        }
    },
    
    createAnswerListItem: function (i, j) {
      this.answerListItem = document.createElement('li');
      this.answerListItem.classList.add('answerListItem');
      this.answerList[i].appendChild(this.answerListItem);

      this.answerCheck = document.createElement('input');
      this.answerCheck.classList.add('answerCheck');
      this.answerCheck.setAttribute('id', 'answerCheck' + i + '_' + j);
      this.answerCheck.setAttribute('type', 'checkbox');
      this.answerListItem.appendChild(this.answerCheck);

      this.answerLabel = document.createElement('label');
      this.answerLabel.classList.add('answerCheck');
      this.answerLabel.setAttribute('for', 'answerCheck' + i + '_' + j);
      this.answerLabel.innerHTML = listComponents[i].answer[j];
      this.answerListItem.appendChild(this.answerLabel);
    },

    createButton: function () {
      this.listButton = document.createElement('input');
      this.listButton.classList.add('listButton');
      this.listButton.setAttribute('type', 'submit');
      this.listButton.setAttribute('value', 'Проверить мои результаты')
      this.formQuestion.appendChild(this.listButton);
    },

    create: function() {
        this.createForm();
        this.createTitle();
        this.createQuestionList();
        this.createButton();
    }


};
htmlForm.create();