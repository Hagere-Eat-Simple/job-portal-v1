// function getMacAddress() {
//     // Get the network interface list.
//     var interfaces = navigator.network.getNetworkInterfaces();
  
//     // Iterate over the network interfaces.
//     for (var i = 0; i < interfaces.length; i++) {
//       // Get the MAC address of the interface.
//       var macAddress = interfaces[i].mac;
  
//       // If the MAC address is not empty, return it.
//       if (macAddress) {
//         return macAddress;
//       }
//     }
  
//     // If the MAC address is not found, return an empty string.
//     return "";
//   }
  
// module.exports = getMacAddress