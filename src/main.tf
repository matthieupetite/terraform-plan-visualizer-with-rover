resource "azurerm_resource_group" "rg" {
  name     = "my-rg"
  location = var.location
}

resource "azurerm_virtual_network" "vnet" {
  name                = "my-vnet"
  location            = "North Europe"
  resource_group_name = azurerm_resource_group.rg.name
  address_space       = ["192.168.0.0/24"]
}

resource "azurerm_subnet" "subnet" {
  name                 = "my-subnet"
  resource_group_name  = azurerm_resource_group.rg.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes       = "192.168.0.0/24"
}

resource "azurerm_network_interface" "nic" {
  name                = "my-nic"
  location            = "North Europe"
  resource_group_name = azurerm_resource_group.rg.name

  ip_configuration {
    name                          = "my-ip-config"
    subnet_id                     = azurerm_subnet.subnet.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.pip.id
  }
}

resource "azurerm_network_security_group" "nsg" {
  name                = "my-nsg"
  location            = "North Europe"
  resource_group_name = azurerm_resource_group.rg.name

  security_rule {
    name                       = "my-nsg-rule"
    priority                   = 1001
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "22"
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }
}

resource "azurerm_public_ip" "pip" {
  name                = "my-pip"
  location            = "North Europe"
  resource_group_name = azurerm_resource_group.rg.name
  allocation_method   = "Static"
}


resource "azurerm_linux_virtual_machine" "vm" {
  name                = "my-vm"
  resource_group_name = azurerm_resource_group.rg.name
  location            = "North Europe"
  size                = "Standard_B1ls"
  admin_username      = "adminuser"
  admin_password      = "SamplePassword1234!"
  network_interface_ids = [
    azurerm_network_interface.nic.id
  ]

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
    disk_size_gb         = 30
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "UbuntuServer"
    sku       = "18.04-LTS"
    version   = "latest"
  }
}
