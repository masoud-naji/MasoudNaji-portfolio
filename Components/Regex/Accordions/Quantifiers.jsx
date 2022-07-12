import "./liststyle.css";
const Quantifiers = ({ setClickToken }) => {
  return (
    <div class="y8wXX">
      <ul class="ullist">
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Zero or one of a</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("a?")}>
              a?
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Zero or more of a</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("a*")}>
              a*
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">One or more of a</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("a+")}>
              a+
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Exactly 3 of a</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("a{3}")}>
              a&#123;3&#125;
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">3 or more of a</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("a{3,}")}>
              a&#123;3,&#125;
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Between 3 and 6 of a</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("a{3,6}")}>
              a&#123;3,6&#125;
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Greedy quantifier</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("a*")}>
              a*
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Lazy quantifier</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("a*?")}>
              a*?
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Possessive quantifier</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("a*+")}>
              a*+
            </div>
          </div>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default Quantifiers;
