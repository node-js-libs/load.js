describe("Load", function(){
  it("should load sample file", function(){
    load('sample.js').thenRun(function(){
      expect(sample).toBeDefined();
      expect(sample).toEqual('Sample executed');
    });
  })
});