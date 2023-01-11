# Ultimaker 3D Printers Dashboard
This is a project for the class Application Development (CCC181) of Mindanao State University - Iligan Institute of Technology (msuiit).

The application connects to FAB LAB Mindanao's suite of Ultimaker printers and shows monitoring information of them. This includes information on which printers are online, what tasks they're doing, and the progress of said task. This serves as a quick and easy way to monitor the status of the printers without having to manually check them one-by-one.

Ultimaker provides similar functionality from their Cura software which mainly serves as a slicing software. However, they don't provide a quick way to monitor all printers on one screen and only shows information about the printer on individual screens.

This uses the APIs built into the machines. See [Ultimaker's Docs](https://docs.api.ultimaker.com/)
> Note: this app is specifically made to work with FAB LAB Mindanao within msuiit's campus, it will not work without modifications for other environments

## Usage
You must be on the same network as the printers for the application to work. In this case, you need to be inside msuiit's campus and connected to any of their networks. The printers must also be connected to the network.

Additionally, you need to install and enable any browsers extension that intercepts and rewrites the Cross-Origin Resource Policy headers. This allows you to access the printers.
> Note: this will not allow you significant control over the printersr's settings and behaviour.

Lastly, go into each printers' settings and note down their IP addresses. Update the IP addresses found in config.json with the correct IP addresses from each printers. You can also modify the request interval in config.json.

If any error occurs, check if the instructions above are followed.