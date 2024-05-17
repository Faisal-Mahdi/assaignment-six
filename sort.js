// var sortByView =data.data ;
// var array = [];

// function displaySort(){
//     console.log('ok')

//     const handleLoadData = async () =>{

        // const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
        // const data = await res.json()

        // console.log(data.data)



//     }

   

    // const display = () => {
    //     sortByView.array.forEach((sort) => {
    //         var sortView = parseFloat(sort.others.views)
    //         array.push(sortView)
    //     });
    //     array.sort((a, b) => b-a);
    
    //     console.log(array);
    // }
   
// }



// displaySort()


// const sort = async () => {
//     const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
//     const data = await res.json()

//     // console.log(data.data)

//     function displaySort(){
//             console.log('ok')
//             console.log(data.data)
//     }

// }

// displaySort()



// const sort = async () =>{
//     const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
//     const data = await res.json()

//     console.log(data.data)

   
// }

// sort()


var array = [];
const sort = async () => {
    
        const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
        const data = await res.json();

        if (data.data && data.data.length > 0) {
            // Extract and log views for each item
            data.data.forEach(item => {
                console.log(`${item.others.views}`);
               

                
            });
        } else {
            console.log("No data available.");
        }
    } 
    

sort();
