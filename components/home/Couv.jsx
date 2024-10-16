import First from "./First";
import Seconde from "./Seconde";
import Done from "./Done"; 
import Laboc from "./Laboc";
import Formation from "./Formation";
import Actualites from "./Actualites";
import Clients from "./Clients";




export default function Couv() {
  return (
    <section className="flex flex-col p-0 gap-0"> 
      <div className="flex flex-col justify-between">
     
        <Seconde />
        
        <div className="flex gap-10 mt-5">
          <First  />
          <Done />
        </div>
        
        <div className="my-0" /> 

        <Laboc />
        <div className="my-8" /> 
        
        <Formation />
        <div className="my-8" />
        
        <Actualites />
        <div className="my-8" /> 
        
        <Clients />
      </div>
    </section>
  );
}
