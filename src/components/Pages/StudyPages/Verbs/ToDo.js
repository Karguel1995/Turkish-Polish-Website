const ToDo = () => {
    return ( 
        <div className="page">
            <h1>To Do - Robić</h1>
<table class="greyGridTable">
    <thead>
        <tr>
            <th></th>
            <th>Present tense</th>
            <th>Future tense</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ja</td>
            <td>robię</td>
            <td>będę robić</td>
        </tr>
        <tr>
            <td>Ty</td>
            <td>robisz</td>
            <td>będziesz robić</td>
        </tr>
        <tr>
            <td>On/Ona/Ono</td>
            <td>robi</td>
            <td>będzie robić</td>
        </tr>
        <tr>
            <td>My</td>
            <td>robimy</td>
            <td>będziemy robić</td>
        </tr>
        <tr>
            <td>Wy</td>
            <td>robicie</td>
            <td>będziecie robić</td>
        </tr>
        <tr>
            <td>Oni/One</td>
            <td>robią</td>
            <td>będą robić</td>
        </tr>
    </tbody>
</table>
</div>
);
}
 
export default ToDo;

