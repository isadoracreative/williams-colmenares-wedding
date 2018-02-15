/* Script for WilliamsColmenaresWedding.info */
/* Website visual design and front-end development by Isadora Williams, copyright 2018 */
/* isadoracreative.com */

function initMap() {
        let harborRoom = {lat: 42.611713, lng: -70.650385};
        let map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: harborRoom
        });
        // let marker = new google.maps.Marker({
        //   position: harborRoom,
        //   map: map,
        //   label: {
        //     color: 'black',
        //     fontWeight: 'bold',
        //     text: 'The Harbor Room',
        //   }
        // });
      }


// script in progress to display registry gift list as grid view on mobile devices (or maybe just in general)
// remove class .listView from #pnlGiftContainer after #pnlGiftContainer has been dynamically added by the myregistry embed code
// add class .gridView to #pnlGiftContainer
// $('#pnlGiftContainer').load(function() {
//   $('#pnlGiftContainer').removeClass('listView').addClass('gridView');
// });