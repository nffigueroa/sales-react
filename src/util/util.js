export default class StateLoader {
  constructor (props) {
  }

  loadState () {
    try {
      const serializedState = localStorage.getItem('http://contoso.com:state')

      if (serializedState === null) {
        return this.initializeState()
      }

      return JSON.parse(serializedState)
    } catch (err) {
      return this.initializeState()
    }
  }

  saveState (state) {
    try {
      const serializedState = JSON.stringify(state)
      localStorage.setItem('http://contoso.com:state', serializedState)
    } catch (err) {
    }
  }

  initializeState () {
    return {
      // state object
    }
  };
}
