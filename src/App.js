import friendsOutsideThumb from './FriendsOfTheOutside_thumb-cover.jpg';
import './App.css';
import pointsBg from './bg_pointDark.png';

function App() {
  return (
    <div className="App">
      <div className="module" style={{maxWidth: '100%'}}>
        <header className="App-header box" style={{backgroundImage: 'url(' + `${pointsBg}` + ')'}}>
          <div className="border">
            <h1 style={{color: '#282828'}}>
              <i>The<br />Open<br />Machine</i>
            </h1>
          </div>
        </header>
        
        <div className="tag box">
        <div className="rule"></div>
          <h2>The open machine is (the earth), understood as a cybernetic phenomenon.</h2>
          <h2>The open machine is a pagan divination.</h2>
          <h2>The open machine is an ethos of encounter over ownership.</h2>
          <h2>The open machine is a machinic negotiation between intention and indeterminacy.</h2>
          <h2>The open machine is a cryptographic gate against the tyranny of the wall.</h2> 
          <h2>The open machine is a stochastic vehicle of emergence.</h2>
          <h2>The open machine is a pirate chemistry. </h2>
          <h2>The open machine is an archive apophenia.</h2>
          <h2>The open machine is a network incantation.</h2>
          <h2><a href="/#matters">the open machine;</a></h2>
          <div className="rule"></div>
        </div>
      </div>

      <div className="manifest">
        <div className="module">
          <div className="box">
            <p>It’s a bit of folk knowledge, well known in the exterior, that the ones who seek totalizing systems are the ones most excluded from the touch of completion. A preliminary definition of truth for the modern age might be: that which an institution cannot see. Because the project of administration, the distance of the template, has to be blind to the singularities - the traces of difference and happenstance which contain in their roughness the strange wholeness of the world. The secrets of the outside.</p>
            <p>Concepts, of course, can vary in their service either to administration and ownership or encounter, even to the point that those who seek the former instead find the trickster germ of the latter. When Von Neumann and Weiner developed the field of cybernetics, they couldn’t know that they were opening up a line of inquiry that would expose them, in their bids at control, to the vengeance of the earth. Bateson’s information ecology: everywhere there is entanglement, recursion, the categorically unstable reflexivity of network systems, there is the earth: an unstoppable difference, <b>an open machine for the production of singularities.</b></p>
            <p>Programming culture tells the same story, the earthen silica of the computer leaping out of the bound to give emergence its voice. The open source movement discovered, in following this metallic flow into the horizon of practice and experimentation, the bazaar, the flat ontology of engineering, where networks move faster than hierarchies and nothing is sacred. It was a wisdom gained by work, beyond all ideological discipline, beyond abstraction and theology, and because of that, it necessarily pointed past the institution.</p>
            <p>Cryptography enabled that intuition, allowing it to be realized as an infrastructure. The builders of web3 were a recursive public: the product of their work embodied the protocols of its own development. They built in ambulant guilds of free association, an ethic of encounter developed solely to expose each node to the non-institional charge, emergence, the rough wholeness. In the infrastructure of the cryptographic ledger is the promise of a society of friends - free encounter among entities under non-coercive conditions, for the earth is magnetically repelled by the atmosphere of coercion. Supremacy is a dead ecology.</p>
            <p>Ruskin <a href="http://homes.ieu.edu.tr/arch204/READINGS/02_RUSKIN.pdf" target="_blank" rel="noopener noreferrer">writes</a> in 1853 of the tradition of the gothic masons, journeyman practitioners whose art contained the generic traits of free association and encounter with the earth (“in gothic work,... the workman must have been altogether set free”). The traits are as follows: <b>Savageness or Rudeness, Love of Change, Love of Nature, Disturbed Imagination,  Obstinacy</b>, and  <b>Generosity</b>. Savage? The brash artistry had no time for ceremony and manicured likenesses, generating  “creations of ungainly shape and rigid limb, but full of wolfish life.” Change: the successive builds made for patchwork styles that embraced difference. The spires and buttresses charged with an obstinance and rigidity “not merely stable, but active … the peculiar energy which gives tension to movement, and stiffness to resistance, which makes the fiercest lightning forked rather than curved.”</p>
          </div>
          <div className="box">
            <p>In the ethos of free work is a negotiation, a pact where the audacity of liberty is checked by the patience of emergence. The journeyman makes acquaintance with the networked earth. “The love of change which becomes morbid and feverish in following the haste of the hunter and the rage of the combatant, is at once soothed and satisfied as it watches the wandering of the tendril, and the budding of the flower. … The sculptor who sought for his models among the forest leaves, could not but quickly and deeply feel that complexity need not involve the loss of grace, nor richness that of repose.” The gothic labors are distinct for this naturalism, this realism, built out of “a profound sympathy with the fulness and wealth of the material universe.”</p>
            <p>In the memelore and production of the builders of the decentralized web, we find these same attributes. We find the savage grasp of materiality - yes, even the materiality of transistor charges and logic gates - loved and embraced for all its robustness. When the relationship to the elements isn’t alienated by the distracted and antireal metaphysics of hierarchy, that abundance unfolds, so that the intention of the producer is fused with the intrigue and chance of the material instance. That’s the question- how can we bring the material instance to bear in building, conceptualizing, and manifesting the flamboyantly fractal and utterly irreverent scale invariance of the network, the (anti-)thing that touches and ignites the rough whole? In work is an imaginatively sober play.</p>
            <p>Borrowing from the ethos of the builders, we announce The Open Machine, a publication press for the advancement of concepts adequate to the network. We forego authority and professionalism for nonlinearity and free association. We call to task interdisciplinary and transhistorical inputs for the sake of conceptual pandemonium. We study the rhythms and arrows of meme propagation so as to venture farther out onto limbs of recursion and emergence. We work through the abandonment issues of those that have forsaken the lords of enclosure and find new idols, machine elves and and mathematical witches of the long and open past.</p>
            <p>We create in an atmosphere of savageness and generosity. We view the expanse with the disturbed eye of reality.</p>
          </div>        
        </div>
      </div>          
      
      <div id="matters" style={{paddingTop: '100px'}}>
        <h2>MATTERS</h2>
      </div>
      <div className="module">
      <div className="">
        <div className="matter module">
          <div className="box">
        <h4><i>The Open Machine</i> #1</h4>
        <div className="rule" style={{textAlign: "center"}} />
        <h3>
          FRIENDS of the OUTSIDE
        </h3>
        <h4>Control, Substrates, & the Afterlife of DAOs</h4>
        <p>A Network Incantation</p>
        <p className="tight">Written and Conceived by</p>
        <p>Exeunt & Vengi</p>
        
        </div>
        <div className='box'>
        <img src={friendsOutsideThumb} className="matter-img" alt="The Friends of the Outside cover" />
        <div className="button-row">
          <a
            className="button"
            href="https://zora.co/collect/oeth:0x2d17e1c913a616e30ff267afda30a69d9ad25343"
            target="_blank"
            rel="noopener noreferrer"
            style={{marginRight: 12}}
          >
            Collect
          </a>
          <a
            className="button"
            href="https://zora.co/collect/oeth:0x2d17e1c913a616e30ff267afda30a69d9ad25343"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redeem
          </a>
        </div>
        </div>
        </div>
      </div>
      <div className="column">
        <div className="matter">
      <h4><i>The Open Machine #2</i></h4>
        <div className="rule" style={{textAlign: "center"}} />
        <h3>
          SURVEYS OF FUTUREPAST
        </h3>
        <h4>Tales of a forgotten glossary</h4>
        <p>Conceived by</p>
        <p>Exeunt</p>
        <div className="button-row">
          <a
            className="matter-link"
            href="/"
            style={{marginRight: 12}}
          >
            Coming Soon
          </a>
          </div>
      </div>
      </div>
      </div>

    </div>
  );
}

export default App;
