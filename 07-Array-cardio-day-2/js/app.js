'use strict';

window.addEventListener(`DOMContentLoaded`, () => {

  // ## Array Cardio Day 2

  const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  const year = new Date().getFullYear();

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  const isSomebodyOlder = arr => arr.some(item => (year - item.year) >= 19);
  console.log(isSomebodyOlder(people));

  // Array.prototype.every() // is everyone 19 or older?
  const isEverybodyOlder = arr => arr.every(item => (year - item.year) >= 19);
  console.log(isEverybodyOlder(people));

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  const findComment = (arr, value) => {
    return arr.find(item => item.id === value);
  };
  console.log(findComment(comments, 823423));

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
  // comments.splice(1,1);
  // console.log(comments);
  const findCommentIndex = (arr, value) => {
    const index = arr.findIndex(item => item.id === value);
    return index;
  };
  const deleteComment = (arr, index) => {
    arr.splice(index, 1);
    return arr;
  };
  console.log(deleteComment(comments, findCommentIndex(comments, 823423)));
});