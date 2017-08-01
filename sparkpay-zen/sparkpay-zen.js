
//     var styleIcons               = document.createElement ("style");
//     styleIcons.type          = "text/css";
//     styleIcons.textContent   = "@font-face { font-family: 'Material Icons'; src: url('"
//                             + chrome.extension.getURL ("lib/icons.woff2")
//                             + "') format('woff2'); }"
//                             ;
//     document.head.appendChild (styleIcons);


function importThemes() { 
    // Themes
    var importThemes = 'theme/_import.css';

    // Import Themes
    var linkThemes       = document.createElement ("link");
        linkThemes.rel   = "stylesheet";
        linkThemes.href  = chrome.extension.getURL (importThemes);

        document.head.appendChild (linkThemes);
}




(function() {
    
    'use strict';

    var toggleButton = `<button class="mdc-fab toggle-editor">
                            <i class="mdc-icon-toggle material-icons" role="button" aria-pressed="false" tabindex="0">
                                <i class="material-icons">code</i>
                            </i>
                            <i class="mdc-icon-toggle material-icons" role="button" aria-pressed="false" tabindex="0" style="display: none">
                                <i class="material-icons">close</i>
                            </i>
                        </button>`;

    var themeSelect =  `<select id="zenTheme" class="zen-theme-select more-actions-button">
                            <option value="cm-s-default">Theme Select (Default)</option>
                            <option value="cm-s-3024-day">3024-day</option>
                            <option value="cm-s-3024-night">3024-night</option>
                            <option value="cm-s-abcdef">abcdef</option>
                            <option value="cm-s-ambiance">ambiance</option>
                            <option value="cm-s-ambiance-mobile">ambiance-mobile</option>
                            <option value="cm-s-base16-dark">base16-dark</option>
                            <option value="cm-s-base16-light">base16-light</option>
                            <option value="cm-s-bespin">bespin</option>
                            <option value="cm-s-blackboard">blackboard</option>
                            <option value="cm-s-cobalt">cobalt</option>
                            <option value="cm-s-colorforth">colorforth</option>
                            <option value="cm-s-dracula">dracula</option>
                            <option value="cm-s-duotone-dark">duotone-dark</option>
                            <option value="cm-s-duotone-light">duotone-light</option>
                            <option value="cm-s-eclipse">eclipse</option>
                            <option value="cm-s-elegant">elegant</option>
                            <option value="cm-s-erlang-dark">erlang-dark</option>
                            <option value="cm-s-hopscotch">hopscotch</option>
                            <option value="cm-s-icecoder">icecoder</option>
                            <option value="cm-s-isotope">isotope</option>
                            <option value="cm-s-lesser-dark">lesser-dark</option>
                            <option value="cm-s-liquibyte">liquibyte</option>
                            <option value="cm-s-material">material</option>
                            <option value="cm-s-mbo">mbo</option>
                            <option value="cm-s-mdn-like">mdn-like</option>
                            <option value="cm-s-midnight">midnight</option>
                            <option value="cm-s-monokai">monokai</option>
                            <option value="cm-s-neat">neat</option>
                            <option value="cm-s-neo">neo</option>
                            <option value="cm-s-night">night</option>
                            <option value="cm-s-panda-syntax">panda-syntax</option>
                            <option value="cm-s-paraiso-dark">paraiso-dark</option>
                            <option value="cm-s-paraiso-light">paraiso-light</option>
                            <option value="cm-s-pastel-on-dark">pastel-on-dark</option>
                            <option value="cm-s-railscasts">railscasts</option>
                            <option value="cm-s-rubyblue">rubyblue</option>
                            <option value="cm-s-seti">seti</option>
                            <option value="cm-s-solarized">solarized</option>
                            <option value="cm-s-the-matrix">the-matrix</option>
                            <option value="cm-s-tomorrow-night-bright">tomorrow-night-bright</option>
                            <option value="cm-s-tomorrow-night-eighties">tomorrow-night-eighties</option>
                            <option value="cm-s-ttcn">ttcn</option>
                            <option value="cm-s-twilight">twilight</option>
                            <option value="cm-s-vibrant-ink">vibrant-ink</option>
                            <option value="cm-s-xq-dark">xq-dark</option>
                            <option value="cm-s-xq-light">xq-light</option>
                            <option value="cm-s-yeti">yeti</option>
                            <option value="cm-s-zenburn">zenburn</option>
                        </select>`;


    function fullPageEditor() {
        $('html').append(toggleButton, themeSelect);

        $('.toggle-editor').on('click', function (e){
            e.preventDefault();

            $(this).toggleClass('active');
            $('.mdc-icon-toggle').toggle();
            $('.CodeMirror').attr('class', 'CodeMirror cm-s-default CodeMirror-wrap');
            $('html').toggleClass('fullpage-editor');
        });
    }

    function themeSelectMenu() {
        $("#zenTheme").on('change', function() {
            // alert(this.value);
            $('.CodeMirror').attr('class', 'CodeMirror CodeMirror-wrap');
            $('.CodeMirror').addClass($(this).val());
        });
    }


    $(function() {
        importThemes();
        fullPageEditor();
        themeSelectMenu();
    });

})();

// <div class="CodeMirror cm-s-default CodeMirror-wrap">