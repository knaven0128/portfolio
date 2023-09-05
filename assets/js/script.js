// document.addEventListener('DOMContentLoaded', function () {
//     const header = document.querySelector('.fixed-header');
//     let isHeaderFixed = false;

//     window.addEventListener('scroll', () => {
//         console.log(window.scrollY); // Debugging: Check scroll position
//         if (window.scrollY > 100 && !isHeaderFixed) {
//             console.log('Adding class'); // Debugging: Check if class is added
//             header.classList.add('fixed');
//             isHeaderFixed = true;
//         } else if (window.scrollY <= 100 && isHeaderFixed) {
//             console.log('Removing class'); // Debugging: Check if class is removed
//             header.classList.remove('fixed');
//             isHeaderFixed = false;
//         }
//     });
// });