/* Script for WilliamsColmenaresWedding.info */
/* Website visual design and front-end development by Isadora Williams, copyright 2018 */
/* isadoracreative.com */

var map;
function initMap() {
        let harborRoom = {lat: 42.611713, lng: -70.650385};
        map = new google.maps.Map(document.getElementById('map'), {
          center: harborRoom,
          zoom: 14
        });
  
        let marker = new google.maps.Marker({
          position: {lat: 42.611713, lng: -70.650385},
          map: map,
          title: 'The Harbor Room'
        });
      }
