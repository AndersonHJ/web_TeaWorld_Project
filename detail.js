var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.quatities = [
        {qty : "1", id:"1"},
        {qty : "2", id:"2"},
        {qty : "3", id:"3"},
        {qty : "4", id:"4"}
    ];



    $scope.states = [
        {Value : "AL", name : "Alabama", freight:"5.00", tax:"0.0891"},
        {Value : "AK", name : "Alaska", freight:"9.99", tax:"0.0176"},
        {Value : "AZ", name : "Arizona", freight:"5.99" , tax:"0.0817"},
        {Value : "AR", name : "Arkansas", freight:"5.00", tax:"0.0926"},
        {Value : "CA", name : "California", freight:"5.00", tax:"0.0844"},
        {Value : "CO", name : "Colorado", freight:"6.00", tax:"0.0744"},
        {Value : "CT", name : "Connecticut", freight:"6.99", tax:"0.0635"},
        {Value : "DE", name : "Delaware", freight:"5.99", tax:"0.0"},

        {Value : "DC", name : "District Of Columbia", freight:"8.99", tax:"0.0575"},
        {Value : "FL", name : "Florida", freight:"7.88", tax:"0.0665"},
        {Value : "GA", name : "Georgia", freight:"5.00", tax:"0.0696"},
        {Value : "HI", name : "Hawaii", freight:"5.99", tax:"0.0435"},
        {Value : "ID", name : "Idaho", freight:"5.99", tax:"0.0601"},
        {Value : "IL", name : "Illinois", freight:"5.00", tax:"0.0819"},
        {Value : "IN", name : "Indiana", freight:"5.00", tax:"0.07"},
        {Value : "IA", name : "Iowa", freight:"5.00", tax:"0.0678"},

        {Value : "KS", name : "Kansas", freight:"5.99" ,tax:"0.0678"},
        {Value : "KY", name : "Kentucky", freight:"5.99", tax:"0.0678"},
        {Value : "LA", name : "Louisiana", freight:"8.88", tax:"0.0678"},
        {Value : "ME", name : "Maine", freight:"9.99", tax:"0.0678"},
        {Value : "MD", name : "Maryland", freight:"9.65", tax:"0.0678"},
        {Value : "MA", name : "Massachusetts", freight:"9.88", tax:"0.0678"},
        {Value : "MI", name : "Michigan", freight:"8.89", tax:"0.0678"},
        {Value : "MN", name : "Minnesota", freight:"5.98", tax:"0.0678"},

        {Value : "MS", name : "Mississippi", freight:"5.00", tax:"0.0678"},
        {Value : "MT", name : "Montana", freight:"5.87", tax:"0.0678"},
        {Value : "MO", name : "Missouri", freight:"5.80", tax:"0.0678"},
        {Value : "NE", name : "Nebraska", freight:"5.23", tax:"0.0678"},
        {Value : "NV", name : "Nevada", freight:"5.00", tax:"0.0678"},
        {Value : "NH", name : "New Hampshire", freight:"5", tax:"0.0678"},
        {Value : "NJ", name : "New Jersey", freight:"5", tax:"0.0678"},
        {Value : "NM", name : "New Mexico", freight:"5", tax:"0.0678"},
        {Value : "NY", name : "New York", freight:"5", tax:"0.0678"},

        {Value : "NC", name : "North Carolina", freight:"5", tax:"0.0678"},
        {Value : "ND", name : "North Dakota", freight:"5", tax:"0.0678"},
        {Value : "OH", name : "Ohio", freight:"5", tax:"0.0678"},
        {Value : "OK", name : "Oklahoma", freight:"5", tax:"0.0678"},
        {Value : "OR", name : "Oregon", freight:"5", tax:"0.0678"},
        {Value : "PA", name : "Pennsylvania", freight:"5", tax:"0.0678"},
        {Value : "RI", name : "Rhode Island", freight:"5", tax:"0.0678"},
        {Value : "SC", name : "South Carolina", freight:"5", tax:"0.0678"},
        {Value : "SD", name : "South Dakota", freight:"5", tax:"0.0678"},

        {Value : "TN", name : "Tennessee", freight:"5", tax:"0.0678"},
        {Value : "TX", name : "Texas", freight:"5", tax:"0.0678"},
        {Value : "UT", name : "Utah", freight:"5", tax:"0.0678"},
        {Value : "VA", name : "Virginia", freight:"5", tax:"0.0678"},
        {Value : "VT", name : "Vermont", freight:"5", tax:"0.0678"},
        {Value : "WV", name : "West Virginia", freight:"5", tax:"0.0678"},
        {Value : "WA", name : "Washington", freight:"5", tax:"0.0678"},
        {Value : "WI", name : "Wisconsin", freight:"5", tax:"0.0678"},
        {Value : "WY", name : "Wyoming", freight:"5", tax:"0.0678"}

    ];
});

function addcart(){
    var teaname=document.getElementById("teaname").innerHTML;
    window.open("cart.html?teaname="+teaname, "myWindow", "width=500, height=500,left=500,top=100");

}