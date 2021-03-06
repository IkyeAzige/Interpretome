$(function() {
window.GenericView = Backbone.View.extend({
  el: $('#exercise-content'),
  name:'eQTL',
  table_id: '#eqtl_table',
  template_id: '#eqtl_template',
  url: '/media/template/lectures/eqtl.html',

  initialize: function() {
    _.bindAll(this, 'loaded',
      'start',
      'display',
      'finish'
    );
  },
  
  render: function() {
    $.get(this.url, this.loaded);
  },
    
  loaded: function(response) {
	  $(this.el).append(response);
	  this.table_template = $(this.template_id).html();
  },
  
  start: function(response) {
    $.get('/media/help/eqtl.html', {}, function(response) {
      $('#help-exercise-help').html(response);
    });
    return true;
  },
  
  display: function(response, all_dbsnps, extended_dbsnps) {
    var self = this;
    
    $.each(response['snps'], function(i, v) {
      _.extend(v, extended_dbsnps[i]);
      $(self.table_id + " > tbody").append(_.template(self.table_template, v))
    });
    $(this.table_id).show();
    $(this.table_id).tablesorter();
    $('#table-options').show();
    
    this.finish(all_dbsnps, extended_dbsnps);
  },
  
  finish: function(all_dbsnps, extended_dbsnps) {

  }
});
});
