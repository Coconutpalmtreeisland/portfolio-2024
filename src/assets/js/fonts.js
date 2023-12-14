(function (d) {
    var config = {
        kitId: 'iup1kbp',
        scriptTimeout: 3000,
        async: true
    },
        h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
})(document);
// gambado-sans-forte
// gambado-scotch-forte
// yoon-meoli-2sv-variable
// ds-ggorgap
// ds-stereo-mild ds-stereo-wild
// pln-hyeongulim
// pln-romanceche
// joongnajoche
// rixjongno-pro
// sandoll-ongothic
// rixgwangalli-pro
// rixrak-sans-pro
// cheoeumcheoreom-210
// santorini-210
// timeline-210
// ssanai
// yeonaesidae
// sandoll-press-basic
// sandoll-press-original
// rixstarlight-pro
// rixjangs-pro
// hahmlet