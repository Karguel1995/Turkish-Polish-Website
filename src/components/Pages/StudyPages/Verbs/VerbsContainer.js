import React from "react";


const VerbsContainer = (props) => {
  const verbs = props.verbList.map(verb => (
    <div key={verb.pronoun} className="verbContainer">
        <p className="verbElement">{verb.pronoun}</p>
        <p className="verbElement">{verb.present}</p>
        <p className="verbElement">{verb.future}</p>
    </div>
    ))
  return ( 
    <div className="containerForSingleVerb">
      <div className="verbMainContainer">
        <p className="verbElement">Pronoun</p>
        <p className="verbElement">Present tense</p>
        <p className="verbElement">Future tense</p>
      </div>
      {verbs}
    </div>

   );
}
 
export default VerbsContainer;