describe("Load", function(){
  it("should load sample file", function(){
    load('sample.js').thenRun(function(){
      expect(sample).toBeDefined();
      expect(sample).toEqual('Sample executed');
    });
  });
  
  it("should load sample file using path", function(){
    load('spec/helpers/sample.js').thenRun(function(){
      expect(helpers_sample).toBeDefined();
      expect(helpers_sample).toEqual('Sample executed');
    });
  })
});