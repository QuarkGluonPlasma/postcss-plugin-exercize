const postcss = require('postcss');
const modulesScope = require("./src/index");

const input = `
.guang {
    color: blue;
}
:local(.dong){
    color: green;
}
:local(.dongdong){
    color: green;
}

:local(.dongdongdong){
    composes-with: dong;
    composes: dongdong;
    color: red;
}

@keyframes :local(guangguang) {
    from {
        width: 0;
    }
    to {
        width: 100px;
    }
}

@media (max-width: 520px) {
    :local(.dong) {
        color: blue;
    }
}
`

const pipeline = postcss([modulesScope]);

const res = pipeline.process(input);

console.log(res.css);
