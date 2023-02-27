const graph = {"nodes":[{"data":{"id":".","label":".","type":"basename"},"classes":"basename"},{"data":{"id":"variable.tf","label":"variable.tf","type":"file","parent":".","parentColor":"lightgray"},"classes":"fname"},{"data":{"id":"var.location","label":"location","type":"variable","parent":"variable.tf","parentColor":"lightgray"},"classes":"variable"},{"data":{"id":"main.tf","label":"main.tf","type":"file","parent":".","parentColor":"lightgray"},"classes":"fname"},{"data":{"id":"azurerm_subnet {main.tf}","label":"azurerm_subnet","type":"resource","parent":"main.tf","parentColor":"lightgray"},"classes":"resource-type"},{"data":{"id":"azurerm_subnet.subnet","label":"subnet","type":"resource","parent":"azurerm_subnet {main.tf}","parentColor":"lightgray","change":"create"},"classes":"resource-name create"},{"data":{"id":"azurerm_virtual_network {main.tf}","label":"azurerm_virtual_network","type":"resource","parent":"main.tf","parentColor":"lightgray"},"classes":"resource-type"},{"data":{"id":"azurerm_virtual_network.vnet","label":"vnet","type":"resource","parent":"azurerm_virtual_network {main.tf}","parentColor":"lightgray","change":"create"},"classes":"resource-name create"},{"data":{"id":"azurerm_linux_virtual_machine {main.tf}","label":"azurerm_linux_virtual_machine","type":"resource","parent":"main.tf","parentColor":"lightgray"},"classes":"resource-type"},{"data":{"id":"azurerm_linux_virtual_machine.vm","label":"vm","type":"resource","parent":"azurerm_linux_virtual_machine {main.tf}","parentColor":"lightgray","change":"create"},"classes":"resource-name create"},{"data":{"id":"azurerm_network_interface {main.tf}","label":"azurerm_network_interface","type":"resource","parent":"main.tf","parentColor":"lightgray"},"classes":"resource-type"},{"data":{"id":"azurerm_network_interface.nic","label":"nic","type":"resource","parent":"azurerm_network_interface {main.tf}","parentColor":"lightgray","change":"create"},"classes":"resource-name create"},{"data":{"id":"azurerm_network_security_group {main.tf}","label":"azurerm_network_security_group","type":"resource","parent":"main.tf","parentColor":"lightgray"},"classes":"resource-type"},{"data":{"id":"azurerm_network_security_group.nsg","label":"nsg","type":"resource","parent":"azurerm_network_security_group {main.tf}","parentColor":"lightgray","change":"create"},"classes":"resource-name create"},{"data":{"id":"azurerm_public_ip {main.tf}","label":"azurerm_public_ip","type":"resource","parent":"main.tf","parentColor":"lightgray"},"classes":"resource-type"},{"data":{"id":"azurerm_public_ip.pip","label":"pip","type":"resource","parent":"azurerm_public_ip {main.tf}","parentColor":"lightgray","change":"create"},"classes":"resource-name create"},{"data":{"id":"azurerm_resource_group {main.tf}","label":"azurerm_resource_group","type":"resource","parent":"main.tf","parentColor":"lightgray"},"classes":"resource-type"},{"data":{"id":"azurerm_resource_group.rg","label":"rg","type":"resource","parent":"azurerm_resource_group {main.tf}","parentColor":"lightgray","change":"create"},"classes":"resource-name create"}],"edges":[{"data":{"id":"azurerm_linux_virtual_machine.vm-\u003eazurerm_network_interface.nic","source":"azurerm_linux_virtual_machine.vm","target":"azurerm_network_interface.nic","gradient":"lightgray lightgray"},"classes":"edge"},{"data":{"id":"azurerm_linux_virtual_machine.vm-\u003eazurerm_resource_group.rg","source":"azurerm_linux_virtual_machine.vm","target":"azurerm_resource_group.rg","gradient":"lightgray lightgray"},"classes":"edge"},{"data":{"id":"azurerm_network_interface.nic-\u003eazurerm_resource_group.rg","source":"azurerm_network_interface.nic","target":"azurerm_resource_group.rg","gradient":"lightgray lightgray"},"classes":"edge"},{"data":{"id":"azurerm_network_security_group.nsg-\u003eazurerm_resource_group.rg","source":"azurerm_network_security_group.nsg","target":"azurerm_resource_group.rg","gradient":"lightgray lightgray"},"classes":"edge"},{"data":{"id":"azurerm_public_ip.pip-\u003eazurerm_resource_group.rg","source":"azurerm_public_ip.pip","target":"azurerm_resource_group.rg","gradient":"lightgray lightgray"},"classes":"edge"},{"data":{"id":"azurerm_resource_group.rg-\u003evar.location","source":"azurerm_resource_group.rg","target":"var.location","gradient":"lightgray #1d7ada"},"classes":"edge"},{"data":{"id":"azurerm_subnet.subnet-\u003eazurerm_virtual_network.vnet","source":"azurerm_subnet.subnet","target":"azurerm_virtual_network.vnet","gradient":"lightgray lightgray"},"classes":"edge"},{"data":{"id":"azurerm_subnet.subnet-\u003eazurerm_resource_group.rg","source":"azurerm_subnet.subnet","target":"azurerm_resource_group.rg","gradient":"lightgray lightgray"},"classes":"edge"},{"data":{"id":"azurerm_virtual_network.vnet-\u003eazurerm_resource_group.rg","source":"azurerm_virtual_network.vnet","target":"azurerm_resource_group.rg","gradient":"lightgray lightgray"},"classes":"edge"}]}