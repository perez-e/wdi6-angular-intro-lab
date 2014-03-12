// Generated by CoffeeScript 1.7.1
var bookly;

bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  $scope.books = books;
  $scope.cartBooks = [];
  $scope.total = $scope.count = 0;
  $scope.selects = ['author', 'title', 'price'];
  $scope.select = "title";
  $scope.addCart = function(book) {
    if ($scope.cartBooks.indexOf(book) >= 0) {
      book.quantity += 1;
    } else {
      book.quantity = 1;
      $scope.cartBooks.push(book);
    }
    $scope.total += book.price;
    $scope.count += 1;
  };
  $scope.emptyCart = function() {
    $scope.cartBooks = [];
    $scope.count = $scope.total = 0;
  };
};
