function my_Dictionary() {
    var Animal = {
        Species:"Cat",
        Color:"White",
        Breed:"Persian",
        Age:"3",
        Sound:"Meow"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}