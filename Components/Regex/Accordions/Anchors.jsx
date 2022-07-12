import "./liststyle.css";
const Anchors = ({ setClickToken }) => {
  return (
    <div class="y8wXX">
      <ul class="ullist">
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Start of match
</div>
            <div class="IVPLo i8N8D" onClick={ e => setClickToken("\\G")}>
\G
</div>
          
</div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Start of string
</div>
            <div class="IVPLo i8N8D" onClick={ e => setClickToken("^")}>
^
</div>
          
</div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">End of string
</div>
            <div class="IVPLo i8N8D" onClick={ e => setClickToken("$")}>
$
</div>
          
</div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Start of string
</div>
            <div class="IVPLo i8N8D" onClick={ e => setClickToken("\\A")}>
\A
</div>
          
</div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">End of string
</div>
            <div class="IVPLo i8N8D" onClick={ e => setClickToken("\\Z")}>
\Z
</div>
          
</div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Absolute end of string
</div>
            <div class="IVPLo i8N8D" onClick={ e => setClickToken("\\z")}>
\z
</div>
          
</div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">A word boundary
</div>
            <div class="IVPLo i8N8D" onClick={ e => setClickToken("\\b")}>
\b
</div>
          
</div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Non-word boundary
</div>
            <div class="IVPLo i8N8D" onClick={ e => setClickToken("\\B")}>
\B
</div>
          
</div>
        </li>
        <hr />
      </ul>
    
</div>
  );
};

export default Anchors;
