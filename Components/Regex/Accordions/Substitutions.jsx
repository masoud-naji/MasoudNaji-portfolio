import "./liststyle.css";
const Substitutions = ({ setClickToken }) => {
  return (
    <div class="y8wXX">
      <ul class="ullist">
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Contents in capture group 1</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("$1")}>
              $1
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Contents in capture group `foo`</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("${foo}")}>
              $&#123;foo&#125;
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Hexadecimal replacement values</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("\\x20")}>
              \x20
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Hexadecimal replacement values</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("\\x{06fa}")}>
              \x&#123;06fa&#125;
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Insert a tab</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("\\t")}>
              \t
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Insert a carriage return</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("\\r")}>
              \r
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Insert a newline</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("\\n")}>
              \n
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Insert a form-feed</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("\\f")}>
              \f
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Uppercase Transformation</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("\\U")}>
              \U
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Lowercase Transformation</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("\\L")}>
              \L
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Terminate any Transformation</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("\\E")}>
              \E
            </div>
          </div>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default Substitutions;
