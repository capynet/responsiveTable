/* ====================================================
 * responsiveTable
 * https://github.com/capynet/responsiveTable
 * jQuery 1.3+
 * Marcelo Iván Tosco (capynet)
 * ==================================================== */
!function ($) {
  "use strict";
  var plugin;

  var Class = function (el, options) {

    plugin = this;
    this.$table = $(el);

    var defaults = {
      headingClass: 'heading-col',
      headingLabelClass: 'heading-label',
      tdProcessedClass: 'td-processed'
    };

    this.options = $.extend(defaults, options);
    this.$headings = null;

    init();
  };

  Class.prototype = {
    metodoPublico: function () {
    }
  };

  function init() {
    setupHeadings();
    processCols();
  }

  function setupHeadings() {
    var $ths = plugin.$table.find("th");

    // Selecionamos los header y si no fueron definidos hacemos fallback al primer grupo de td
    if ($ths.length) {
      plugin.$headings = $ths;
      plugin._alternativeHeadings = false;
    } else {
      plugin.$headings = plugin.$table.find('tbody > tr:first td');
      plugin._alternativeHeadings = true;
    }

    plugin.$headings.addClass(plugin.options.headingClass);
  }

  function processCols() {
    $.each(plugin.$headings, function () {
      var $heading = $(this);
      var $headingSpan = $('<span>').addClass(plugin.options.headingLabelClass).text($heading.text());
      var columnIndex = $heading.index() + 1;
      var $colElementsSelector = !plugin._alternativeHeadings ? 'tr td:nth-child(' + columnIndex + ')' : 'tr:not(:first) td:nth-child(' + columnIndex + ')';
      var $colElements = plugin.$table.find($colElementsSelector);

      $colElements.contents().filter(function () {
        return this.nodeType === 3;
      }).wrap('<div class="content">');

      $colElements.addClass(plugin.options.tdProcessedClass).prepend($headingSpan);
    });
  }

  $.fn.responsiveTable = function (options) {

    var args = Array.prototype.slice.call(arguments);
    args.shift();

    return this.each(function () {
      var $table = $(this);
      var data = $table.data("responsiveTable");
      if (!data) $table.data("responsiveTable", (data = new Class(this, options)));
      if (typeof options == 'string') data[options].apply(this, args);
    })
  };

  $.fn.responsiveTable.Constructor = Class;
}(window.jQuery);