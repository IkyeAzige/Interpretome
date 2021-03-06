from django.conf.urls.defaults import *

# First argument to patterns can be a prefix.
urlpatterns = patterns('interpretome.application.views',
  (r'^$', 'index'),
  (r'^submit/$', 'submit'),
  (r'lookup/exercise/$', 'exercise'),
  (r'lookup/longevity/$', 'longevity'),
  (r'lookup/neandertal/$', 'get_neandertal_snps'),
  (r'lookup/linked/$', 'linked'),
  (r'lookup/impute/$', 'impute'),
  (r'lookup/get_reference_alleles/$', 'get_reference_alleles'),
  (r'lookup/get_allele_frequencies/$', 'get_allele_frequencies'),
  (r'lookup/get_chrom_pos/$', 'get_chrom_pos'),
  (r'lookup/get_damaging_info/$', 'get_damaging_info'),
  
  (r'^get_bingo_info/$', 'get_bingo_info'),
  (r'^playing_bingo/$', 'playing_bingo'),
  (r'^get_playing_bingo/$', 'get_playing_bingo'),
  (r'^get_bingo_image/$', 'get_bingo_image'),
  
  (r'^get_snps_on_map/$', 'get_snps_on_map'),
  (r'^get_hgdp_allele_frequencies/$', 'get_hgdp_allele_frequencies'),
  
  (r'similarity/get_individuals/$', 'get_individuals'),
  (r'pca/get_pca_parameters/$', 'get_pca_parameters'),
  (r'diabetes/get_diabetes_snps/$', 'get_diabetes_snps'),
  (r'height/get_height_snps/$', 'get_height_snps'),
  #(r'submit/submit_doses/$', 'submit_doses'),
  #(r'submit/submit_coordinates/$', 'submit_coordinates'),
  
  (r'disease/get_gwas_catalog/$', 'get_gwas_catalog'),
  (r'^diabetes/$', 'diabetes'),
  (r'^get_pharmacogenomics_snps/$', 'get_pharmacogenomics_snps'),
  (r'^get_painting_params/$', 'get_painting_params'),
  
  (r'^get_rare_variants/$', 'get_rare_variants'),
  (r'^get_drug_targets/$', 'get_drug_targets'),
  (r'^get_polyphen_scores/$', 'get_polyphen_scores'),
  (r'^get_vis_info/$', 'get_vis_info')
)
