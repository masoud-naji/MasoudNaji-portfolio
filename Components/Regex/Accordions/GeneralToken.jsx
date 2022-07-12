import "./liststyle.css";
const GeneralToken = ({ setClickToken }) => {
  return (
    <div class="y8wXX">
      <ul class="ullist">
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Newline</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("\\n")}>
              \n
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Carriage return</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("\\r")}>
              \r
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Tab</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("\\t")}>
              \t
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Null character</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("\\0")}>
              \0
            </div>
          </div>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default GeneralToken;
