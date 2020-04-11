 const mockFirebase = {
    collection: (Orden) => {
      return {
        add: (objData) => Promise.resolve(objData),
      }
    }
  }
  
export default mockFirebase;