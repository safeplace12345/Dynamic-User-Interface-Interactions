const div = document.querySelector('.root');
const btn = document.querySelector('.btn');

function displayOpts() {
    const opts = document.querySelectorAll('.option');
    opts.forEach((opt) => {
        const el = opt
        el.style.display = 'block';
    });
}

function hideOpts() {
    const opt = document.querySelectorAll('.option');
    // eslint-disable-next-line no-return-assign
    opt.forEach((op) => {
        const elem = op;
        elem.style.display = 'none';
    });
}
btn.addEventListener('mouseover', displayOpts);
btn.addEventListener('mouseleave', hideOpts);

exports.dropDown = function () {
    return {
        displayOpts,
        hideOpts
    }
}