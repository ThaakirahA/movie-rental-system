class WindowsButton {
  render() {
    return "Rendering Windows Button";
  }
}

class MacButton {
  render() {
    return "Rendering MacOS Button";
  }
}

class WindowsFactory {
  createButton() {
    return new WindowsButton();
  }
}

class MacFactory {
  createButton() {
    return new MacButton();
  }
}

module.exports = { WindowsFactory, MacFactory };