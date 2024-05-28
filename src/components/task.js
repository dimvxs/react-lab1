import React from 'react';


 function Info(props){
    return(
<div class = "info">
    <img src = "./pictures/logo.png" class = "logo" />
    <h1>Paris Saint-Germain F.C.</h1>
    <p>{props.info}</p>
</div>
    );
}


 function Rewards(props){
    return(
        <div class = "rewards">
<h2>Rewards</h2>
<p>{props.rewards}</p>
</div>
  );
}


const ListItem = props => {
    const value = props.value;
    return  <li>{value}</li>
  }

   const Players = ({ players }) => {
    return (
      <ol className='players'>{
        players.map(item => <ListItem value={item}/>)
      }</ol>
    );
  }
export function App1(){
    const players = ["Marc-André ter Stegen (vice-captain)", "João Cancelo (on loan from Manchester City)", "Alejandro Balde", "Ronald Araújo (3rd captain)", "Iñigo Martínez", "Gavi", "Ferran Torres", "Pedri", "Robert Lewandowski", "Raphinha", "Iñaki Peña"];
    const rewards = "Paris Saint-Germain holds many records, most notably being the most successful \
    French club in history in terms of official titles won, with 50. They are the \
    record holders of all national competitions, having clinched twelve Ligue 1 \
    championships, fourteen Coupe de France, nine Coupe de la Ligue, and twelve \
    Trophée des Champions. Their trophy cabinet also includes one Ligue 2 title. \
    In international football, PSG have claimed one UEFA Cup Winners' Cup and one UEFA Intertoto Cup.";

    const info = "Paris Saint-Germain Football Club, commonly referred to as Paris Saint-Germain \
    or simply PSG, is a professional football club based in Paris, France. They \
    compete in Ligue 1, the top division of French football. As France's most successful\
     club, they have won 50 official honours, including twelve league titles and one major \
     European trophy. Their home ground is the Parc des Princes, located in the 16th \
     arrondissement of Paris near the Boulogne-Billancourt commune.";
    
    return(
        <div class = "App1">
    <Info info={info}></Info>
    <Rewards rewards={rewards}></Rewards>
    <Players players={players}></Players>
    </div>
)
}