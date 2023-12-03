//https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if(this.rating===undefined){this.rating="PG"}
    }
    display (){
        console.log(`${this.title},${this.studio},${this.rating}`)
    }
   movieobject(){
    return ({title:this.title,
        studio:this.studio,
        rating:this.rating})

   }
   getgetPG(arr)
   {
    let data=arr.filter(film=>film.rating=="PG")
     console.log(data.map(b=>b.title))
   }
}
   let Movie1=new movie("Custody","xxx")
   Movie1.display()
  let Movie2=new movie("VellariPattanam","xxxx","PG")
  let Movie3=new movie("Googly","anapurna","PG")
  let Movie4=new movie("Kantara","xxxx","PG")
  let film=new movie("Casino Royale","Eon Productions","PG13")
 film.display()
  let arr=[]
   arr.push(Movie1.movieobject())
   arr.push(Movie2.movieobject())
   arr.push(Movie3.movieobject())
   arr.push(Movie4.movieobject())
   console.log(arr)