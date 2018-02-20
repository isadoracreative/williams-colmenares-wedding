/* Script for WilliamsColmenaresWedding.info */
/* Website visual design and front-end development by Isadora Williams, copyright 2018 */
/* isadoracreative.com */

function initMap() {
        let harborRoom = {lat: 42.611713, lng: -70.650385};
        let map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: harborRoom
        });
  
        let marker = new google.maps.Marker({
          position: {lat: 42.611713, lng: -70.650385},
          map: map,
          title: 'The Harbor Room'
        });
      }