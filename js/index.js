// import a css file
import "../css/main.scss";

// import a local file
import Human from "./human";

// import a node module
import $ from "jquery"; 



let abhishek = new Human  ('Abhishek', 30);

$('#hero').on("click", function () {
    var $hero = $(this);
    $hero.html(abhishek.sayName());


    setTimeout(() => {

        // try using split or dynamic import.
        import('./superman').then(function (SupermanModule) {
            var Superman = SupermanModule.default;
            var s = new Superman(abhishek);

            $hero.html(s.yo() + ' this is from module loading ' + s.sayName());
        });
    }, 1000);

});
