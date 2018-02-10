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