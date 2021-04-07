import { isValid, sendData, FormHandler } from '../src/functions'

describe('Tests', () => {
  
  // units
  describe('isValid', () => {
    it('Should be valid', () => {
      expect(isValid('Alex')).toBeTruthy();
    })
    it('Should be work with underfined', () => {
      expect(isValid()).toBeFalsy();
    })
    it('Should be valid length === 4', () => {
      expect('Alex').toHaveLength(4);
    }) 
    it('Should be invalid length !=== 5', () => {
      expect('Alex').not.toHaveLength(5);
    }) 
    it('Should be invalid with emty', () => {
      expect(isValid( '   ')).toBeFalsy();
    })  
  })
  describe('sendData', () => {
    it('Should send data', () => {
      const saveFn = jest.fn();
      sendData('Alex', saveFn)
      expect(saveFn).toHaveBeenCalledWith('Alex');
    })
  })
  // integration
  describe('FormHandler', () => {
    it('If name is valid should send data', () => {
      const isValidFn = jest.fn().mockImplementation(() => true);;
      const sendDataFn = jest.fn();
      const formHandler = new FormHandler(isValidFn, sendDataFn);
      const name = 'abc';
      formHandler.onSubmit(name)
      expect(isValidFn).toHaveBeenCalledWith(name);
      expect(sendDataFn).toHaveBeenCalledWith(name);
    })
    
    it('If name is invalid should send data', () => {
      const isValidFn = jest.fn().mockImplementation(() => false);
      const sendDataFn = jest.fn();
      const formHandler = new FormHandler(isValidFn, sendDataFn);
      const name = 'abc';
      formHandler.onSubmit(name)
      expect(isValidFn).toHaveBeenCalledWith(name);
      expect(sendDataFn).not.toHaveBeenCalledWith();
    })
  })
})
