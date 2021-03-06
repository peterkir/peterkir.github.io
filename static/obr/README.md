# OSGi Bundle Repositories (OBR)

## Eclipse release obrs 

the following list contains the eclipse release repositories <b>origin</b> is the source url, <b>xml</b> obr repo as XML, <b>gzip</b> obr as gzip 

- Eclipse Platform Release 4.6.1
	- Platform     [origin](http://download.eclipse.org/eclipse/updates/4.6/R-4.6.1-201609071200) [gzip](eclipse_4.6.1_Platform.xml.gz)
	- Simultaneous [origin](http://download.eclipse.org/releases/neon/201609281000/)              [gzip](eclipse_4.6.1_Simultaneous.xml.gz) 

- Eclipse Platform Release 4.6.0 
	- Platform     [origin](http://download.eclipse.org/eclipse/updates/4.6/R-4.6-201606061100)   [gzip](eclipse_4.6.0_Platform.xml.gz)
	- Simultaneous [origin](http://download.eclipse.org/releases/neon/201606221000/)              [gzip](eclipse_4.6.0_Simultaneous.xml.gz) 

- Eclipse Platform Release 4.4.1 Luna                
	- Platform     [origin](http://download.eclipse.org/eclipse/updates/4.4/R-4.4.1-201409250400) [xml](eclipse_4.4.1_Platform.xml)     [gzip](eclipse_4.4.1_Platform.xml.gz)
	- Simultaneous [origin](http://download.eclipse.org/releases/luna/201409261001)               [xml](eclipse_4.4.1_Simultaneous.xml) [gzip](eclipse_4.4.1_Simultaneous.xml.gz) 

- Eclipse Platform Release 4.4.0 Luna
	- Platform     [origin](http://download.eclipse.org/eclipse/updates/4.4/R-4.4-201406061215)   [xml](eclipse_4.4.0_Platform.xml)     [gzip](eclipse_4.4.0_Platform.xml.gz)
	- Simultaneous [origin](http://download.eclipse.org/releases/luna/201406250900)               [xml](eclipse_4.4.0_Simultaneous.xml) [gzip](eclipse_4.4.0_Simultaneous.xml.gz)

- Eclipse Platform Release 4.3.0 Kepler
	- Platform     [origin](http://download.eclipse.org/eclipse/updates/4.3/R-4.3.2-201402211700) [xml](eclipse_4.3.2_Platform.xml)     [gzip](eclipse_4.3.2_Platform.xml.gz)
	- Simultaneous [origin](http://download.eclipse.org/releases/kepler/201402280900)             [xml](eclipse_4.3.2_Simultaneous.xml) [gzip](eclipse_4.3.2_Simultaneous.xml.gz)

- Eclipse Platform Release 3.8.2/4.2.2 Juno
	- Platform     [origin](http://download.eclipse.org/eclipse/updates/3.8/R-3.8.2-201301310800) [xml](eclipse_3.8.2_Platform.xml)     [gzip](eclipse_3.8.2_Platform.xml.gz)
	- Simultaneous [origin](http://download.eclipse.org/releases/juno/201303010900)               [xml](eclipse_3.8.2_Simultaneous.xml) [gzip](eclipse_3.8.2_Simultaneous.xml.gz)

- Eclipse Release 3.7.2 Indigo                
	- Platform     [origin](http://download.eclipse.org/eclipse/updates/3.7/R-3.7.2-201202080800) [xml](eclipse_3.7.2_Platform.xml)     [gzip](eclipse_3.7.2_Platform.xml.gz)
	- Simultaneous [origin](http://download.eclipse.org/releases/indigo/201202240900)             [xml](eclipse_3.7.2_Simultaneous.xml) [gzip](eclipse_3.7.2_Simultaneous.xml.gz)

- Eclipse Release 3.6.2 Helios                
	- Platform     [origin](http://download.eclipse.org/eclipse/updates/3.6/R-3.6.2-201102101200) [xml](eclipse_3.6.2_Platform.xml)     [gzip](eclipse_3.6.2_Platform.xml.gz)
	- Simultaneous [origin](http://download.eclipse.org/releases/helios/201102250900)             [xml](eclipse_3.6.2_Simultaneous.xml) [gzip](eclipse_3.6.2_Simultaneous.xml.gz)
                                                             
	
	
	
## <a name="usage">usage</a> sample of an include section for the usage inside bnd/bndtools

put the following section inside your bnd configuration (e.g. ext/repositories.bnd)

    aQute.bnd.deployer.repository.FixedIndexedRepo;\ 
    		name=<name in Repositories View>;\
    		locations=http://peterkir/obr/eclipse_Platform_R-4.4-201406061215.xml,\
            cache=${workspace}/cnf/cache/R-4.4-201406061215


## how where these repositories created

- p2 repositories have been mirrored locally
- executed bindex command with the following call

<pre><code>
    java -jar bindex.jar
    -t http://download.eclipse.org/eclipse/updates/4.4/R-4.4-201406061215%p/%f
    -d file:/F:/www/download.eclipse.org/eclipse/updates/4.4/R-4.4-201406061215
    -r obr/eclipse_Platform_R-4.4-201406061215.xml
    -v
    -stylesheet http://www.osgi.org/www/obr2html.xsl
    F:/www/download.eclipse.org/eclipse/updates/4.4/R-4.4-201406061215
</code></pre>
