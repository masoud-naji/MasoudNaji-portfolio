import "./liststyle.css";
const FlagsModifiers = ({ setClickToken }) => {
  return (
    <div class="y8wXX">
      <ul class="ullist">
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Global</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("g")}>
              g
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Multiline</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("m")}>
              m
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Case insensitive</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("i")}>
              i
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Ignore whitespace / verbose</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("x")}>
              x
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Single line</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("s")}>
              s
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Unicode</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("u")}>
              u
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">eXtra</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("X")}>
              X
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Ungreedy</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("U")}>
              U
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Anchor</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("A")}>
              A
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Duplicate group names</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("J")}>
              J
            </div>
          </div>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default FlagsModifiers;
