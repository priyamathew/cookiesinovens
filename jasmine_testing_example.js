describe("A Cookie"), function(){
  var cookie;
  beforeEach(function(){
      cookie = new Cookie("chocolate", 20)
  })

  it("should have a cookie type", function(){
      expect(cookie.cookietype).toBe("chocolate");
  })
})