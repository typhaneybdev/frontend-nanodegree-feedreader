/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('all feeds have a url defined and not an empty string', function() {
      allFeeds.forEach(feed => {
        expect(feed.url).toBeDefined(); //check for defined URL
        expect(feed.url.length).not.toBe(0) // checks length of url > 0
      });
    });


    /* Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('all feeds have a name and not an empty string', function() {
      allFeeds.forEach(feed => {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      });

    });
  });


  /* Write a new test suite named "The menu" */
  describe('The menu', function() { //defines new test suite

    /* Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
    it('menu is hidden by default', function() { // check that menu is hidden
      expect($('body').hasClass('menu-hidden')).toBe(true); //check that menu has a class
    });

    /* Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('menu changes visibility on click', function() { //checks menu visibility on click
      $('.menu-icon-link').click(); //simulate click
      expect($('body').hasClass('menu-hidden')).toBe(false); //checks menu visibility shown

      $('.menu-icon-link').click(); //simulate 2nd click
      expect($('body').hasClass('menu-hidden')).toBe(true); //checks menu visibility hidden
    })

  });

  /* TODO: Write a new test suite named "Initial Entries" */
  describe('Initial Entries', function() {



    /* Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
    beforeEach(done => {
      loadFeed(0, done); //fires when asynchronous task is complete; complete after feed is loaded
    });

    it('at least one entry found when loadFeed is called and done', function() { // checks for at least one feed after loadFeed is called and complete
      expect($('.feed, .entry').length).toBeGreaterThan(0); //checks feed entry is greater than zero
    });
  });
  /* TODO: Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {
    let feedOne, //define two feeds
      feedTwo;

    beforeEach(done => {
      //first feed loaded
      loadFeed(0, function() {
        feedOne = $('.feed').html();
        done();
      });
      //second feed loaded
      loadFeed(1, function() {
        feedTwo = $('.feed').html();
        done();
      })
    });

    it('content changes when new feed is loaded', function() {
      expect(feedOne === feedTwo).toBe(false); //compare two feeds for content change on feed load
    });

    /* Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */

  });

}());
