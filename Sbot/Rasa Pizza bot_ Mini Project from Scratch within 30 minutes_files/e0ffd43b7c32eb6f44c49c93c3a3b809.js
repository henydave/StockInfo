document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-a9a1cf2ca01efd362bfa52312712ae94.css">')
document.write('<div id=\"gist96574900\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-nlu_tensorflow-yml\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-yaml \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-nlu_tensorflow-yml-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-nlu_tensorflow-yml-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-ent\">language<\/span>: <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>en<span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-nlu_tensorflow-yml-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-nlu_tensorflow-yml-LC2\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-nlu_tensorflow-yml-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-nlu_tensorflow-yml-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-ent\">pipeline<\/span>:<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-nlu_tensorflow-yml-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-nlu_tensorflow-yml-LC4\" class=\"blob-code blob-code-inner js-file-line\">- <span class=\"pl-ent\">name<\/span>: <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>nlp_spacy<span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-nlu_tensorflow-yml-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-nlu_tensorflow-yml-LC5\" class=\"blob-code blob-code-inner js-file-line\">- <span class=\"pl-ent\">name<\/span>: <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>tokenizer_spacy<span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-nlu_tensorflow-yml-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-nlu_tensorflow-yml-LC6\" class=\"blob-code blob-code-inner js-file-line\">- <span class=\"pl-ent\">name<\/span>: <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>intent_entity_featurizer_regex<span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-nlu_tensorflow-yml-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-nlu_tensorflow-yml-LC7\" class=\"blob-code blob-code-inner js-file-line\">- <span class=\"pl-ent\">name<\/span>: <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>intent_featurizer_spacy<span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-nlu_tensorflow-yml-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-nlu_tensorflow-yml-LC8\" class=\"blob-code blob-code-inner js-file-line\">- <span class=\"pl-ent\">name<\/span>: <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>ner_spacy<span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-nlu_tensorflow-yml-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-nlu_tensorflow-yml-LC9\" class=\"blob-code blob-code-inner js-file-line\">- <span class=\"pl-ent\">name<\/span>: <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>ner_crf<span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-nlu_tensorflow-yml-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-nlu_tensorflow-yml-LC10\" class=\"blob-code blob-code-inner js-file-line\">- <span class=\"pl-ent\">name<\/span>: <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>ner_synonyms<span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-nlu_tensorflow-yml-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-nlu_tensorflow-yml-LC11\" class=\"blob-code blob-code-inner js-file-line\">- <span class=\"pl-ent\">name<\/span>: <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>intent_featurizer_count_vectors<span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-nlu_tensorflow-yml-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-nlu_tensorflow-yml-LC12\" class=\"blob-code blob-code-inner js-file-line\">- <span class=\"pl-ent\">name<\/span>: <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>intent_classifier_tensorflow_embedding<span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-nlu_tensorflow-yml-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-nlu_tensorflow-yml-LC13\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-ent\">intent_tokenization_flag<\/span>: <span class=\"pl-c1\">true<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-nlu_tensorflow-yml-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-nlu_tensorflow-yml-LC14\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-ent\">intent_split_symbol<\/span>: <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>+<span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/henydave/e0ffd43b7c32eb6f44c49c93c3a3b809/raw/589c41525690ad0b2571abe4d422a05d3cbbb5d8/nlu_tensorflow.yml\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/henydave/e0ffd43b7c32eb6f44c49c93c3a3b809#file-nlu_tensorflow-yml\">nlu_tensorflow.yml<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')