import React from "react";


const VerbsContainer = (props) => {
  const verbs = props.verbList.map(verb => (
    <div key={verb.pronoun} className="verbContainer">
        <p className="verbElement">{verb.pronoun}</p>
        <p className="verbElement">{verb.present}</p>
        <p className="verbElement">{verb.future}</p>
        <p className="verbElement">{verb.pastMale}</p>
        <p className="verbElement">{verb.pastFemale}</p>
    </div>
    ))
  return ( 
    <div className="containerForSingleVerb">
      <div className="verbMainContainer">
        <p className="verbElement"></p>
        <p className="verbElement">Present tense</p>
        <p className="verbElement">Future tense</p>
        <div className='verbPolishPastTense'>
          <p className="verbElement">Past tense</p>
          <div className="verbPolishPastTenseGender">
            <p className="verbElement">Male</p>
            <p className="verbElement">Female</p>
          </div>
        </div>
      </div>
      {verbs}
    </div>

   );
}
 
export default VerbsContainer;