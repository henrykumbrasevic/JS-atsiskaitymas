const arr = [`Push-ups`, `Sit-ups`, `Bear Crawls`, `1 mile run`, `60 second plank`, `Burpees`, `Jumping Jacks`, 'Squats', `Weighted Squats`, `Inch Worms`]

const randomExercises = (num) => {
    for (let i = 0; i < num; i++){
        if (num > arr.length){
            console.log(`Skaičius per didelis`); break;
        } else if (num < 1) {
                console.log(`Per mažas skaičius`); break;
        } else {
            const skaicius = Math.floor(Math.random()* 9) +1;
            console.log(arr[skaicius]);    
        }
    }
}
randomExercises(3)