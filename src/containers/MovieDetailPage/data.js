
import avt from '../../img/user.png'
import cover from "../../img/covers/cover.jpg";
import cover2 from "../../img/covers/cover2.jpg";
import cover3 from "../../img/covers/cover3.jpg";
import cover4 from "../../img/covers/cover4.jpg";
import cover5 from "../../img/covers/cover5.jpg";
import cover6 from "../../img/covers/cover6.jpg";

const comments = [
    {
        id: 1,
        avt: avt,
        username: 'John Doe',
        time: '30.08.2018, 17:53',
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        like: 12,
        dislike: 12,
        answer: false
    },
    {
        id: 2,
        avt: avt,
        username: 'John Doe',
        time: '30.08.2018, 17:53',
        content: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        like: 12,
        dislike: 12,
        answer: true
    },
    {
        id: 3,
        avt: avt,
        username: 'John Doe',
        time: '30.08.2018, 17:53',
        content: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        like: 12,
        dislike: 12,
        answer: true
    },
    {
        id: 4,
        avt: avt,
        username: 'John Doe',
        time: '30.08.2018, 17:53',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        like: 12,
        dislike: 12,
        answer: false
    },
    {
        id: 5,
        avt: avt,
        username: 'John Doe',
        time: '30.08.2018, 17:53',
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        like: 12,
        dislike: 12,
        answer: false
    },
    {
        id: 6,
        avt: avt,
        username: 'John Doe',
        time: '30.08.2018, 17:53',
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        like: 12,
        dislike: 12
    }

]

const sideCards = [
    {
        id: 1,
        title: 'I Dream in Another Language',
        poster: cover,
        genres: ['Action', 'Triler'],
        imdb: 8.4
    },
    {
        id: 2,
        title: 'Benched',
        poster: cover2,
        genres: ['Comedy'],
        imdb: 7.1
    },
    {
        id: 3,
        title: 'Whitney',
        poster: cover3,
        genres: ['Romance', 'Drama', 'Music'],
        imdb: 6.3
    },
    {
        id: 4,
        title: 'Blindspotting',
        poster: cover4,
        genres: ['Drama', 'Comedy'],
        imdb: 7.9
    },
    {
        id: 5,
        title: 'I Dream in Another Language',
        poster: cover5,
        genres: ['Action', 'Triler'],
        imdb: 8.4
    },
    {
        id: 6,
        title: 'Benched',
        poster: cover6,
        genres: ['Comedy', 'Triler'],
        imdb: 8.4
    }

]

const movie = {
    id: 1,
    title: "I Dream in Another Language",
    poster: cover,
    resolution: "HD",
    limitAge: "16+",
    genres: ["Action", "Roman"],
    imdb: 8.7,
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    country: "USA",
    release: "2017",
    time: 100,
    // sources:[ {id:1,src: "https://www.googleapis.com/drive/v3/files/1N4Y4zfOHH_Et7Z1swNz_Rz2LzsUiLmNV?alt=media&key=AIzaSyDfmnew541jCJhtv10z4R6pKDg1CdkMXOA"},
    //           {id:2,src:"https://www.googleapis.com/drive/v3/files/1BNHG5VIzLtOEx6rQV8o4O-yT6omnNT6L?alt=media&key=AIzaSyDfmnew541jCJhtv10z4R6pKDg1CdkMXOA"},
    //           {id:3,src:"https://www.googleapis.com/drive/v3/files/14DQBuKPBapfRmu7GxihTd7PR6u_89H2-?alt=media&key=AIzaSyDfmnew541jCJhtv10z4R6pKDg1CdkMXOA"}]
    src:"https://www.googleapis.com/drive/v3/files/1N4Y4zfOHH_Et7Z1swNz_Rz2LzsUiLmNV?alt=media&key=AIzaSyDfmnew541jCJhtv10z4R6pKDg1CdkMXOA"
 
}
export { comments, sideCards, movie }
// "https://www.googleapis.com/drive/v3/files/1N4Y4zfOHH_Et7Z1swNz_Rz2LzsUiLmNV?alt=media&key=AIzaSyDfmnew541jCJhtv10z4R6pKDg1CdkMXOA",
//           "https://www.googleapis.com/drive/v3/files/1BNHG5VIzLtOEx6rQV8o4O-yT6omnNT6L?alt=media&key=AIzaSyDfmnew541jCJhtv10z4R6pKDg1CdkMXOA",
//           "https://www.googleapis.com/drive/v3/files/14DQBuKPBapfRmu7GxihTd7PR6u_89H2-?alt=media&key=AIzaSyDfmnew541jCJhtv10z4R6pKDg1CdkMXOA"