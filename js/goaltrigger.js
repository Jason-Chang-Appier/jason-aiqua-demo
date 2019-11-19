$(function () {
    document.addEventListener('click', function (e) {
        if (e.target.tagName === 'A' && e.target.getAttribute('data-goal-trigger') != null) {
            e.preventDefault();
            if (e.button !== 0) return;
            let $this = $(e.target);
            let $goalname = $this.data('goal-trigger').split('_');
            let url = '/cathaylife/-/media/D956DC1B74AD454C99688926814A1F73';
            $.each($goalname, function (idx, val) {
                try {
                    $.ajax({
                        type: "GET",
                        url: url,
                        data: { sc_trk: val },
                        async: false,
                        cache: false,
                        error: function (err) {
                            console.log(err.status + ' - ' + err.statusText);
                        },
                    });
                } catch (e) {
                    console.log(e.message);
                    return;
                }
            })
            let target = $this.attr('target');
            switch(target)
            {
                case '_blank':
                    window.open($this.attr('href'), '_blank');
                    break;
                default:
                    window.location.href = $this.attr('href');
                    break;
            }
        }
    }, true)
})