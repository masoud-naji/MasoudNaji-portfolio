import "./liststyle.css";
const CommonToken = ({ setClickToken }) => {
  return (
    <div class="y8wXX">
      <ul class="ullist">
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">A single character of: a, b or c</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("[abc]")}>
              [abc]
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">A character except: a, b or c</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("[^abc]")}>
                                   
              [^abc]
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">A character in the range: a-z</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("[a-z]")}>
              [a-z]
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">A character not in the range: a-z</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("[^a-z]")}>
              [^a-z]
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">A character in the range: a-z or A-Z</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("[a-zA-Z]")}>
              [a-zA-Z]
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Any single character</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken(".")}>
              .
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Alternate - match either a or b</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("a|b")}>
              a|b
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Any whitespace character</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("s")}>
              \s
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Any non-whitespace character</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("\\S")}>
              \S
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Any digit</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("\\d")}>
              \d
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Any non-digit</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("\\D")}>
              \D
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Any word character</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("w")}>
              \w
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Any non-word character</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("\\W")}>
              \W
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Match everything enclosed</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("(?:...)")}>
              (?:...)
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Capture everything enclosed</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("(...)")}>
              (...)
            </div>
          </div>
        </li>
        <hr />
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
              a{3}
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
            <div class="Lta24">Start of string</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("^")}>
              ^
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">End of string</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("$")}>
              $
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">A word boundary</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("\\b")}>
              \b
            </div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Non-word boundary</div>
            <div class="IVPLo i8N8D" onClick={() => setClickToken("\\B")}>
              \B
            </div>
          </div>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default CommonToken;
