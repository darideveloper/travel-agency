!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <meta name="robots" content="NONE,NOARCHIVE">
  <title>DoesNotExist
          at /project-markdown/</title>
  <style type="text/css">
    html * { padding:0; margin:0; }
    body * { padding:10px 20px; }
    body * * { padding:0; }
    body { font:small sans-serif; background-color:#fff; color:#000; }
    body>div { border-bottom:1px solid #ddd; }
    h1 { font-weight:normal; }
    h2 { margin-bottom:.8em; }
    h3 { margin:1em 0 .5em 0; }
    h4 { margin:0 0 .5em 0; font-weight: normal; }
    code, pre { font-size: 100%; white-space: pre-wrap; }
    summary { cursor: pointer; }
    table { border:1px solid #ccc; border-collapse: collapse; width:100%; background:white; }
    tbody td, tbody th { vertical-align:top; padding:2px 3px; }
    thead th {
      padding:1px 6px 1px 3px; background:#fefefe; text-align:left;
      font-weight:normal; font-size:11px; border:1px solid #ddd;
    }
    tbody th { width:12em; text-align:right; color:#666; padding-right:.5em; }
    table.vars { margin:5px 0 2px 40px; }
    table.vars td, table.req td { font-family:monospace; }
    table td.code { width:100%; }
    table td.code pre { overflow:hidden; }
    table.source th { color:#666; }
    table.source td { font-family:monospace; white-space:pre; border-bottom:1px solid #eee; }
    ul.traceback { list-style-type:none; color: #222; }
    ul.traceback li.frame { padding-bottom:1em; color:#4f4f4f; }
    ul.traceback li.user { background-color:#e0e0e0; color:#000 }
    div.context { padding:10px 0; overflow:hidden; }
    div.context ol { padding-left:30px; margin:0 10px; list-style-position: inside; }
    div.context ol li { font-family:monospace; white-space:pre; color:#777; cursor:pointer; padding-left: 2px; }
    div.context ol li pre { display:inline; }
    div.context ol.context-line li { color:#464646; background-color:#dfdfdf; padding: 3px 2px; }
    div.context ol.context-line li span { position:absolute; right:32px; }
    .user div.context ol.context-line li { background-color:#bbb; color:#000; }
    .user div.context ol li { color:#666; }
    div.commands, summary.commands { margin-left: 40px; }
    div.commands a, summary.commands { color:#555; text-decoration:none; }
    .user div.commands a { color: black; }
    #summary { background: #ffc; }
    #summary h2 { font-weight: normal; color: #666; }
    #explanation { background:#eee; }
    #template, #template-not-exist { background:#f6f6f6; }
    #template-not-exist ul { margin: 0 0 10px 20px; }
    #template-not-exist .postmortem-section { margin-bottom: 3px; }
    #unicode-hint { background:#eee; }
    #traceback { background:#eee; }
    #requestinfo { background:#f6f6f6; padding-left:120px; }
    #summary table { border:none; background:transparent; }
    #requestinfo h2, #requestinfo h3 { position:relative; margin-left:-100px; }
    #requestinfo h3 { margin-bottom:-1em; }
    .error { background: #ffc; }
    .specific { color:#cc3300; font-weight:bold; }
    h2 span.commands { font-size:.7em; font-weight:normal; }
    span.commands a:link {color:#5E5694;}
    pre.exception_value { font-family: sans-serif; color: #575757; font-size: 1.5em; margin: 10px 0 10px 0; }
    .append-bottom { margin-bottom: 10px; }
    .fname { user-select: all; }
  </style>
  
  <script>
    function hideAll(elems) {
      for (var e = 0; e < elems.length; e++) {
        elems[e].style.display = 'none';
      }
    }
    window.onload = function() {
      hideAll(document.querySelectorAll('ol.pre-context'));
      hideAll(document.querySelectorAll('ol.post-context'));
      hideAll(document.querySelectorAll('div.pastebin'));
    }
    function toggle() {
      for (var i = 0; i < arguments.length; i++) {
        var e = document.getElementById(arguments[i]);
        if (e) {
          e.style.display = e.style.display == 'none' ? 'block': 'none';
        }
      }
      return false;
    }
    function switchPastebinFriendly(link) {
      s1 = "Switch to copy-and-paste view";
      s2 = "Switch back to interactive view";
      link.textContent = link.textContent.trim() == s1 ? s2: s1;
      toggle('browserTraceback', 'pastebinTraceback');
      return false;
    }
  </script>
  
</head>
<body>
<div id="summary">
  <h1>DoesNotExist
       at /project-markdown/</h1>
  <pre class="exception_value">Project matching query does not exist.</pre>
  <table class="meta">

    <tr>
      <th>Request Method:</th>
      <td>GET</td>
    </tr>
    <tr>
      <th>Request URL:</th>
      <td>http://127.0.0.1:8000/project-markdown/?repo=https://github.com/darideveloper/travel-agency</td>
    </tr>

    <tr>
      <th>Django Version:</th>
      <td>4.0.4</td>
    </tr>

    <tr>
      <th>Exception Type:</th>
      <td>DoesNotExist</td>
    </tr>


    <tr>
      <th>Exception Value:</th>
      <td><pre>Project matching query does not exist.</pre></td>
    </tr>


    <tr>
      <th>Exception Location:</th>
      <td><span class="fname">E:full stackportfolio_2.0portfolio-django-api-restvenvLibsite-packagesdjangodbmodelsquery.py</span>, line 496, in get</td>
    </tr>

    <tr>
      <th>Python Executable:</th>
      <td>E:full stackportfolio_2.0portfolio-django-api-restvenvScriptspython.exe</td>
    </tr>
    <tr>
      <th>Python Version:</th>
      <td>3.11.1</td>
    </tr>
    <tr>
      <th>Python Path:</th>
      <td><pre>[&#x27;E:full stackportfolio_2.0portfolio-django-api-rest&#x27;,
 &#x27;C:Program FilesPython311python311.zip&#x27;,
 &#x27;C:Program FilesPython311DLLs&#x27;,
 &#x27;C:Program FilesPython311Lib&#x27;,
 &#x27;C:Program FilesPython311&#x27;,
 &#x27;E:full stackportfolio_2.0portfolio-django-api-restvenv&#x27;,
 &#x27;E:full &#x27;
 &#x27;stackportfolio_2.0portfolio-django-api-restvenvLibsite-packages&#x27;]</pre></td>
    </tr>
    <tr>
      <th>Server time:</th>
      <td>Thu, 01 Jun 2023 00:13:40 -0600</td>
    </tr>
  </table>
</div>




<div id="traceback">
  <h2>Traceback <span class="commands"><a href="#" onclick="return switchPastebinFriendly(this);">
    Switch to copy-and-paste view</a></span>
  </h2>
  <div id="browserTraceback">
    <ul class="traceback">
      
        
        <li class="frame django">
          
            <code class="fname">E:full stackportfolio_2.0portfolio-django-api-restvenvLibsite-packagesdjangocorehandlersexception.py</code>, line 55, in inner
          

          
            <div class="context" id="c2002739056768">
              
                <ol start="48" class="pre-context" id="pre2002739056768">
                
                  <li onclick="toggle('pre2002739056768', 'post2002739056768')"><pre></pre></li>
                
                  <li onclick="toggle('pre2002739056768', 'post2002739056768')"><pre>        return inner</pre></li>
                
                  <li onclick="toggle('pre2002739056768', 'post2002739056768')"><pre>    else:</pre></li>
                
                  <li onclick="toggle('pre2002739056768', 'post2002739056768')"><pre></pre></li>
                
                  <li onclick="toggle('pre2002739056768', 'post2002739056768')"><pre>        @wraps(get_response)</pre></li>
                
                  <li onclick="toggle('pre2002739056768', 'post2002739056768')"><pre>        def inner(request):</pre></li>
                
                  <li onclick="toggle('pre2002739056768', 'post2002739056768')"><pre>            try:</pre></li>
                
                </ol>
              
              <ol start="55" class="context-line">
                <li onclick="toggle('pre2002739056768', 'post2002739056768')"><pre>                response = get_response(request)</pre> <span>â¦</span></li>
              </ol>
              
                <ol start='56' class="post-context" id="post2002739056768">
                  
                  <li onclick="toggle('pre2002739056768', 'post2002739056768')"><pre>            except Exception as exc:</pre></li>
                  
                  <li onclick="toggle('pre2002739056768', 'post2002739056768')"><pre>                response = response_for_exception(request, exc)</pre></li>
                  
                  <li onclick="toggle('pre2002739056768', 'post2002739056768')"><pre>            return response</pre></li>
                  
                  <li onclick="toggle('pre2002739056768', 'post2002739056768')"><pre></pre></li>
                  
                  <li onclick="toggle('pre2002739056768', 'post2002739056768')"><pre>        return inner</pre></li>
                  
                  <li onclick="toggle('pre2002739056768', 'post2002739056768')"><pre></pre></li>
                  
              </ol>
              
            </div>
          

          
            
              <details>
                <summary class="commands">Local vars</summary>
            
            <table class="vars" id="v2002739056768">
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                
                  <tr>
                    <td>exc</td>
                    <td class="code"><pre>DoesNotExist(&#x27;Project matching query does not exist.&#x27;)</pre></td>
                  </tr>
                
                  <tr>
                    <td>get_response</td>
                    <td class="code"><pre>&lt;bound method BaseHandler._get_response of &lt;django.core.handlers.wsgi.WSGIHandler object at 0x000001D24BC22D50&gt;&gt;</pre></td>
                  </tr>
                
                  <tr>
                    <td>request</td>
                    <td class="code"><pre>&lt;WSGIRequest: GET &#x27;/project-markdown/?repo=https://github.com/darideveloper/travel-agency&#x27;&gt;</pre></td>
                  </tr>
                
              </tbody>
            </table>
            </details>
          
        </li>
      
        
        <li class="frame django">
          
            <code class="fname">E:full stackportfolio_2.0portfolio-django-api-restvenvLibsite-packagesdjangocorehandlersbase.py</code>, line 197, in _get_response
          

          
            <div class="context" id="c2002739066432">
              
                <ol start="190" class="pre-context" id="pre2002739066432">
                
                  <li onclick="toggle('pre2002739066432', 'post2002739066432')"><pre></pre></li>
                
                  <li onclick="toggle('pre2002739066432', 'post2002739066432')"><pre>        if response is None:</pre></li>
                
                  <li onclick="toggle('pre2002739066432', 'post2002739066432')"><pre>            wrapped_callback = self.make_view_atomic(callback)</pre></li>
                
                  <li onclick="toggle('pre2002739066432', 'post2002739066432')"><pre>            # If it is an asynchronous view, run it in a subthread.</pre></li>
                
                  <li onclick="toggle('pre2002739066432', 'post2002739066432')"><pre>            if asyncio.iscoroutinefunction(wrapped_callback):</pre></li>
                
                  <li onclick="toggle('pre2002739066432', 'post2002739066432')"><pre>                wrapped_callback = async_to_sync(wrapped_callback)</pre></li>
                
                  <li onclick="toggle('pre2002739066432', 'post2002739066432')"><pre>            try:</pre></li>
                
                </ol>
              
              <ol start="197" class="context-line">
                <li onclick="toggle('pre2002739066432', 'post2002739066432')"><pre>                response = wrapped_callback(request, *callback_args, **callback_kwargs)</pre> <span>â¦</span></li>
              </ol>
              
                <ol start='198' class="post-context" id="post2002739066432">
                  
                  <li onclick="toggle('pre2002739066432', 'post2002739066432')"><pre>            except Exception as e:</pre></li>
                  
                  <li onclick="toggle('pre2002739066432', 'post2002739066432')"><pre>                response = self.process_exception_by_middleware(e, request)</pre></li>
                  
                  <li onclick="toggle('pre2002739066432', 'post2002739066432')"><pre>                if response is None:</pre></li>
                  
                  <li onclick="toggle('pre2002739066432', 'post2002739066432')"><pre>                    raise</pre></li>
                  
                  <li onclick="toggle('pre2002739066432', 'post2002739066432')"><pre></pre></li>
                  
                  <li onclick="toggle('pre2002739066432', 'post2002739066432')"><pre>        # Complain if the view returned None (a common error).</pre></li>
                  
              </ol>
              
            </div>
          

          
            
              <details>
                <summary class="commands">Local vars</summary>
            
            <table class="vars" id="v2002739066432">
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                
                  <tr>
                    <td>callback</td>
                    <td class="code"><pre>&lt;function View.as_view.&lt;locals&gt;.view at 0x000001D24C262340&gt;</pre></td>
                  </tr>
                
                  <tr>
                    <td>callback_args</td>
                    <td class="code"><pre>()</pre></td>
                  </tr>
                
                  <tr>
                    <td>callback_kwargs</td>
                    <td class="code"><pre>{}</pre></td>
                  </tr>
                
                  <tr>
                    <td>middleware_method</td>
                    <td class="code"><pre>&lt;bound method CsrfViewMiddleware.process_view of &lt;CsrfViewMiddleware get_response=convert_exception_to_response.&lt;locals&gt;.inner&gt;&gt;</pre></td>
                  </tr>
                
                  <tr>
                    <td>request</td>
                    <td class="code"><pre>&lt;WSGIRequest: GET &#x27;/project-markdown/?repo=https://github.com/darideveloper/travel-agency&#x27;&gt;</pre></td>
                  </tr>
                
                  <tr>
                    <td>response</td>
                    <td class="code"><pre>None</pre></td>
                  </tr>
                
                  <tr>
                    <td>self</td>
                    <td class="code"><pre>&lt;django.core.handlers.wsgi.WSGIHandler object at 0x000001D24BC22D50&gt;</pre></td>
                  </tr>
                
                  <tr>
                    <td>wrapped_callback</td>
                    <td class="code"><pre>&lt;function View.as_view.&lt;locals&gt;.view at 0x000001D24C262340&gt;</pre></td>
                  </tr>
                
              </tbody>
            </table>
            </details>
          
        </li>
      
        
        <li class="frame django">
          
            <code class="fname">E:full stackportfolio_2.0portfolio-django-api-restvenvLibsite-packagesdjangoviewsdecoratorscsrf.py</code>, line 54, in wrapped_view
          

          
            <div class="context" id="c2002739064128">
              
                <ol start="47" class="pre-context" id="pre2002739064128">
                
                  <li onclick="toggle('pre2002739064128', 'post2002739064128')"><pre></pre></li>
                
                  <li onclick="toggle('pre2002739064128', 'post2002739064128')"><pre></pre></li>
                
                  <li onclick="toggle('pre2002739064128', 'post2002739064128')"><pre>def csrf_exempt(view_func):</pre></li>
                
                  <li onclick="toggle('pre2002739064128', 'post2002739064128')"><pre>    &quot;&quot;&quot;Mark a view function as being exempt from the CSRF view protection.&quot;&quot;&quot;</pre></li>
                
                  <li onclick="toggle('pre2002739064128', 'post2002739064128')"><pre>    # view_func.csrf_exempt = True would also work, but decorators are nicer</pre></li>
                
                  <li onclick="toggle('pre2002739064128', 'post2002739064128')"><pre>    # if they don&#x27;t have side effects, so return a new function.</pre></li>
                
                  <li onclick="toggle('pre2002739064128', 'post2002739064128')"><pre>    def wrapped_view(*args, **kwargs):</pre></li>
                
                </ol>
              
              <ol start="54" class="context-line">
                <li onclick="toggle('pre2002739064128', 'post2002739064128')"><pre>        return view_func(*args, **kwargs)</pre> <span>â¦</span></li>
              </ol>
              
                <ol start='55' class="post-context" id="post2002739064128">
                  
                  <li onclick="toggle('pre2002739064128', 'post2002739064128')"><pre></pre></li>
                  
                  <li onclick="toggle('pre2002739064128', 'post2002739064128')"><pre>    wrapped_view.csrf_exempt = True</pre></li>
                  
                  <li onclick="toggle('pre2002739064128', 'post2002739064128')"><pre>    return wraps(view_func)(wrapped_view)</pre></li>
                  
              </ol>
              
            </div>
          

          
            
              <details>
                <summary class="commands">Local vars</summary>
            
            <table class="vars" id="v2002739064128">
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                
                  <tr>
                    <td>args</td>
                    <td class="code"><pre>(&lt;WSGIRequest: GET &#x27;/project-markdown/?repo=https://github.com/darideveloper/travel-agency&#x27;&gt;,)</pre></td>
                  </tr>
                
                  <tr>
                    <td>kwargs</td>
                    <td class="code"><pre>{}</pre></td>
                  </tr>
                
                  <tr>
                    <td>view_func</td>
                    <td class="code"><pre>&lt;function View.as_view.&lt;locals&gt;.view at 0x000001D24C2622A0&gt;</pre></td>
                  </tr>
                
              </tbody>
            </table>
            </details>
          
        </li>
      
        
        <li class="frame django">
          
            <code class="fname">E:full stackportfolio_2.0portfolio-django-api-restvenvLibsite-packagesdjangoviewsgenericbase.py</code>, line 84, in view
          

          
            <div class="context" id="c2002739062720">
              
                <ol start="77" class="pre-context" id="pre2002739062720">
                
                  <li onclick="toggle('pre2002739062720', 'post2002739062720')"><pre>            self = cls(**initkwargs)</pre></li>
                
                  <li onclick="toggle('pre2002739062720', 'post2002739062720')"><pre>            self.setup(request, *args, **kwargs)</pre></li>
                
                  <li onclick="toggle('pre2002739062720', 'post2002739062720')"><pre>            if not hasattr(self, &quot;request&quot;):</pre></li>
                
                  <li onclick="toggle('pre2002739062720', 'post2002739062720')"><pre>                raise AttributeError(</pre></li>
                
                  <li onclick="toggle('pre2002739062720', 'post2002739062720')"><pre>                    &quot;%s instance has no &#x27;request&#x27; attribute. Did you override &quot;</pre></li>
                
                  <li onclick="toggle('pre2002739062720', 'post2002739062720')"><pre>                    &quot;setup() and forget to call super()?&quot; % cls.__name__</pre></li>
                
                  <li onclick="toggle('pre2002739062720', 'post2002739062720')"><pre>                )</pre></li>
                
                </ol>
              
              <ol start="84" class="context-line">
                <li onclick="toggle('pre2002739062720', 'post2002739062720')"><pre>            return self.dispatch(request, *args, **kwargs)</pre> <span>â¦</span></li>
              </ol>
              
                <ol start='85' class="post-context" id="post2002739062720">
                  
                  <li onclick="toggle('pre2002739062720', 'post2002739062720')"><pre></pre></li>
                  
                  <li onclick="toggle('pre2002739062720', 'post2002739062720')"><pre>        view.view_class = cls</pre></li>
                  
                  <li onclick="toggle('pre2002739062720', 'post2002739062720')"><pre>        view.view_initkwargs = initkwargs</pre></li>
                  
                  <li onclick="toggle('pre2002739062720', 'post2002739062720')"><pre></pre></li>
                  
                  <li onclick="toggle('pre2002739062720', 'post2002739062720')"><pre>        # __name__ and __qualname__ are intentionally left unchanged as</pre></li>
                  
                  <li onclick="toggle('pre2002739062720', 'post2002739062720')"><pre>        # view_class should be used to robustly determine the name of the view</pre></li>
                  
              </ol>
              
            </div>
          

          
            
              <details>
                <summary class="commands">Local vars</summary>
            
            <table class="vars" id="v2002739062720">
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                
                  <tr>
                    <td>args</td>
                    <td class="code"><pre>()</pre></td>
                  </tr>
                
                  <tr>
                    <td>cls</td>
                    <td class="code"><pre>&lt;class &#x27;api.views.ProjectMarkdown&#x27;&gt;</pre></td>
                  </tr>
                
                  <tr>
                    <td>initkwargs</td>
                    <td class="code"><pre>{}</pre></td>
                  </tr>
                
                  <tr>
                    <td>kwargs</td>
                    <td class="code"><pre>{}</pre></td>
                  </tr>
                
                  <tr>
                    <td>request</td>
                    <td class="code"><pre>&lt;WSGIRequest: GET &#x27;/project-markdown/?repo=https://github.com/darideveloper/travel-agency&#x27;&gt;</pre></td>
                  </tr>
                
                  <tr>
                    <td>self</td>
                    <td class="code"><pre>&lt;api.views.ProjectMarkdown object at 0x000001D24C86B590&gt;</pre></td>
                  </tr>
                
              </tbody>
            </table>
            </details>
          
        </li>
      
        
        <li class="frame user">
          
            <code class="fname">E:full stackportfolio_2.0portfolio-django-api-restest_frameworkviews.py</code>, line 509, in dispatch
          

          
            <div class="context" id="c2002739061312">
              
                <ol start="502" class="pre-context" id="pre2002739061312">
                
                  <li onclick="toggle('pre2002739061312', 'post2002739061312')"><pre>                                  self.http_method_not_allowed)</pre></li>
                
                  <li onclick="toggle('pre2002739061312', 'post2002739061312')"><pre>            else:</pre></li>
                
                  <li onclick="toggle('pre2002739061312', 'post2002739061312')"><pre>                handler = self.http_method_not_allowed</pre></li>
                
                  <li onclick="toggle('pre2002739061312', 'post2002739061312')"><pre></pre></li>
                
                  <li onclick="toggle('pre2002739061312', 'post2002739061312')"><pre>            response = handler(request, *args, **kwargs)</pre></li>
                
                  <li onclick="toggle('pre2002739061312', 'post2002739061312')"><pre></pre></li>
                
                  <li onclick="toggle('pre2002739061312', 'post2002739061312')"><pre>        except Exception as exc:</pre></li>
                
                </ol>
              
              <ol start="509" class="context-line">
                <li onclick="toggle('pre2002739061312', 'post2002739061312')"><pre>            response = self.handle_exception(exc)</pre> <span>â¦</span></li>
              </ol>
              
                <ol start='510' class="post-context" id="post2002739061312">
                  
                  <li onclick="toggle('pre2002739061312', 'post2002739061312')"><pre></pre></li>
                  
                  <li onclick="toggle('pre2002739061312', 'post2002739061312')"><pre>        self.response = self.finalize_response(request, response, *args, **kwargs)</pre></li>
                  
                  <li onclick="toggle('pre2002739061312', 'post2002739061312')"><pre>        return self.response</pre></li>
                  
                  <li onclick="toggle('pre2002739061312', 'post2002739061312')"><pre></pre></li>
                  
                  <li onclick="toggle('pre2002739061312', 'post2002739061312')"><pre>    def options(self, request, *args, **kwargs):</pre></li>
                  
                  <li onclick="toggle('pre2002739061312', 'post2002739061312')"><pre>        &quot;&quot;&quot;</pre></li>
                  
              </ol>
              
            </div>
          

          
            
              <details>
                <summary class="commands">Local vars</summary>
            
            <table class="vars" id="v2002739061312">
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                
                  <tr>
                    <td>args</td>
                    <td class="code"><pre>()</pre></td>
                  </tr>
                
                  <tr>
                    <td>handler</td>
                    <td class="code"><pre>&lt;bound method ProjectMarkdown.get of &lt;api.views.ProjectMarkdown object at 0x000001D24C86B590&gt;&gt;</pre></td>
                  </tr>
                
                  <tr>
                    <td>kwargs</td>
                    <td class="code"><pre>{}</pre></td>
                  </tr>
                
                  <tr>
                    <td>request</td>
                    <td class="code"><pre>&lt;rest_framework.request.Request: GET &#x27;/project-markdown/?repo=https://github.com/darideveloper/travel-agency&#x27;&gt;</pre></td>
                  </tr>
                
                  <tr>
                    <td>self</td>
                    <td class="code"><pre>&lt;api.views.ProjectMarkdown object at 0x000001D24C86B590&gt;</pre></td>
                  </tr>
                
              </tbody>
            </table>
            </details>
          
        </li>
      
        
        <li class="frame user">
          
            <code class="fname">E:full stackportfolio_2.0portfolio-django-api-restest_frameworkviews.py</code>, line 469, in handle_exception
          

          
            <div class="context" id="c2002739052800">
              
                <ol start="462" class="pre-context" id="pre2002739052800">
                
                  <li onclick="toggle('pre2002739052800', 'post2002739052800')"><pre></pre></li>
                
                  <li onclick="toggle('pre2002739052800', 'post2002739052800')"><pre>        exception_handler = self.get_exception_handler()</pre></li>
                
                  <li onclick="toggle('pre2002739052800', 'post2002739052800')"><pre></pre></li>
                
                  <li onclick="toggle('pre2002739052800', 'post2002739052800')"><pre>        context = self.get_exception_handler_context()</pre></li>
                
                  <li onclick="toggle('pre2002739052800', 'post2002739052800')"><pre>        response = exception_handler(exc, context)</pre></li>
                
                  <li onclick="toggle('pre2002739052800', 'post2002739052800')"><pre></pre></li>
                
                  <li onclick="toggle('pre2002739052800', 'post2002739052800')"><pre>        if response is None:</pre></li>
                
                </ol>
              
              <ol start="469" class="context-line">
                <li onclick="toggle('pre2002739052800', 'post2002739052800')"><pre>            self.raise_uncaught_exception(exc)</pre> <span>â¦</span></li>
              </ol>
              
                <ol start='470' class="post-context" id="post2002739052800">
                  
                  <li onclick="toggle('pre2002739052800', 'post2002739052800')"><pre></pre></li>
                  
                  <li onclick="toggle('pre2002739052800', 'post2002739052800')"><pre>        response.exception = True</pre></li>
                  
                  <li onclick="toggle('pre2002739052800', 'post2002739052800')"><pre>        return response</pre></li>
                  
                  <li onclick="toggle('pre2002739052800', 'post2002739052800')"><pre></pre></li>
                  
                  <li onclick="toggle('pre2002739052800', 'post2002739052800')"><pre>    def raise_uncaught_exception(self, exc):</pre></li>
                  
                  <li onclick="toggle('pre2002739052800', 'post2002739052800')"><pre>        if settings.DEBUG:</pre></li>
                  
              </ol>
              
            </div>
          

          
            
              <details>
                <summary class="commands">Local vars</summary>
            
            <table class="vars" id="v2002739052800">
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                
                  <tr>
                    <td>context</td>
                    <td class="code"><pre>{&#x27;args&#x27;: (),
 &#x27;kwargs&#x27;: {},
 &#x27;request&#x27;: &lt;rest_framework.request.Request: GET &#x27;/project-markdown/?repo=https://github.com/darideveloper/travel-agency&#x27;&gt;,
 &#x27;view&#x27;: &lt;api.views.ProjectMarkdown object at 0x000001D24C86B590&gt;}</pre></td>
                  </tr>
                
                  <tr>
                    <td>exc</td>
                    <td class="code"><pre>DoesNotExist(&#x27;Project matching query does not exist.&#x27;)</pre></td>
                  </tr>
                
                  <tr>
                    <td>exception_handler</td>
                    <td class="code"><pre>&lt;function exception_handler at 0x000001D24C1F8860&gt;</pre></td>
                  </tr>
                
                  <tr>
                    <td>response</td>
                    <td class="code"><pre>None</pre></td>
                  </tr>
                
                  <tr>
                    <td>self</td>
                    <td class="code"><pre>&lt;api.views.ProjectMarkdown object at 0x000001D24C86B590&gt;</pre></td>
                  </tr>
                
              </tbody>
            </table>
            </details>
          
        </li>
      
        
        <li class="frame user">
          
            <code class="fname">E:full stackportfolio_2.0portfolio-django-api-restest_frameworkviews.py</code>, line 480, in raise_uncaught_exception
          

          
            <div class="context" id="c2002739063424">
              
                <ol start="473" class="pre-context" id="pre2002739063424">
                
                  <li onclick="toggle('pre2002739063424', 'post2002739063424')"><pre></pre></li>
                
                  <li onclick="toggle('pre2002739063424', 'post2002739063424')"><pre>    def raise_uncaught_exception(self, exc):</pre></li>
                
                  <li onclick="toggle('pre2002739063424', 'post2002739063424')"><pre>        if settings.DEBUG:</pre></li>
                
                  <li onclick="toggle('pre2002739063424', 'post2002739063424')"><pre>            request = self.request</pre></li>
                
                  <li onclick="toggle('pre2002739063424', 'post2002739063424')"><pre>            renderer_format = getattr(request.accepted_renderer, &#x27;format&#x27;)</pre></li>
                
                  <li onclick="toggle('pre2002739063424', 'post2002739063424')"><pre>            use_plaintext_traceback = renderer_format not in (&#x27;html&#x27;, &#x27;api&#x27;, &#x27;admin&#x27;)</pre></li>
                
                  <li onclick="toggle('pre2002739063424', 'post2002739063424')"><pre>            request.force_plaintext_errors(use_plaintext_traceback)</pre></li>
                
                </ol>
              
              <ol start="480" class="context-line">
                <li onclick="toggle('pre2002739063424', 'post2002739063424')"><pre>        raise exc</pre> <span>â¦</span></li>
              </ol>
              
                <ol start='481' class="post-context" id="post2002739063424">
                  
                  <li onclick="toggle('pre2002739063424', 'post2002739063424')"><pre></pre></li>
                  
                  <li onclick="toggle('pre2002739063424', 'post2002739063424')"><pre>    # Note: Views are made CSRF exempt from within `as_view` as to prevent</pre></li>
                  
                  <li onclick="toggle('pre2002739063424', 'post2002739063424')"><pre>    # accidental removal of this exemption in cases where `dispatch` needs to</pre></li>
                  
                  <li onclick="toggle('pre2002739063424', 'post2002739063424')"><pre>    # be overridden.</pre></li>
                  
                  <li onclick="toggle('pre2002739063424', 'post2002739063424')"><pre>    def dispatch(self, request, *args, **kwargs):</pre></li>
                  
                  <li onclick="toggle('pre2002739063424', 'post2002739063424')"><pre>        &quot;&quot;&quot;</pre></li>
                  
              </ol>
              
            </div>
          

          
            
              <details>
                <summary class="commands">Local vars</summary>
            
            <table class="vars" id="v2002739063424">
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                
                  <tr>
                    <td>exc</td>
                    <td class="code"><pre>DoesNotExist(&#x27;Project matching query does not exist.&#x27;)</pre></td>
                  </tr>
                
                  <tr>
                    <td>renderer_format</td>
                    <td class="code"><pre>&#x27;json&#x27;</pre></td>
                  </tr>
                
                  <tr>
                    <td>request</td>
                    <td class="code"><pre>&lt;rest_framework.request.Request: GET &#x27;/project-markdown/?repo=https://github.com/darideveloper/travel-agency&#x27;&gt;</pre></td>
                  </tr>
                
                  <tr>
                    <td>self</td>
                    <td class="code"><pre>&lt;api.views.ProjectMarkdown object at 0x000001D24C86B590&gt;</pre></td>
                  </tr>
                
                  <tr>
                    <td>use_plaintext_traceback</td>
                    <td class="code"><pre>True</pre></td>
                  </tr>
                
              </tbody>
            </table>
            </details>
          
        </li>
      
        
        <li class="frame user">
          
            <code class="fname">E:full stackportfolio_2.0portfolio-django-api-restest_frameworkviews.py</code>, line 506, in dispatch
          

          
            <div class="context" id="c2002739057408">
              
                <ol start="499" class="pre-context" id="pre2002739057408">
                
                  <li onclick="toggle('pre2002739057408', 'post2002739057408')"><pre>            # Get the appropriate handler method</pre></li>
                
                  <li onclick="toggle('pre2002739057408', 'post2002739057408')"><pre>            if request.method.lower() in self.http_method_names:</pre></li>
                
                  <li onclick="toggle('pre2002739057408', 'post2002739057408')"><pre>                handler = getattr(self, request.method.lower(),</pre></li>
                
                  <li onclick="toggle('pre2002739057408', 'post2002739057408')"><pre>                                  self.http_method_not_allowed)</pre></li>
                
                  <li onclick="toggle('pre2002739057408', 'post2002739057408')"><pre>            else:</pre></li>
                
                  <li onclick="toggle('pre2002739057408', 'post2002739057408')"><pre>                handler = self.http_method_not_allowed</pre></li>
                
                  <li onclick="toggle('pre2002739057408', 'post2002739057408')"><pre></pre></li>
                
                </ol>
              
              <ol start="506" class="context-line">
                <li onclick="toggle('pre2002739057408', 'post2002739057408')"><pre>            response = handler(request, *args, **kwargs)</pre> <span>â¦</span></li>
              </ol>
              
                <ol start='507' class="post-context" id="post2002739057408">
                  
                  <li onclick="toggle('pre2002739057408', 'post2002739057408')"><pre></pre></li>
                  
                  <li onclick="toggle('pre2002739057408', 'post2002739057408')"><pre>        except Exception as exc:</pre></li>
                  
                  <li onclick="toggle('pre2002739057408', 'post2002739057408')"><pre>            response = self.handle_exception(exc)</pre></li>
                  
                  <li onclick="toggle('pre2002739057408', 'post2002739057408')"><pre></pre></li>
                  
                  <li onclick="toggle('pre2002739057408', 'post2002739057408')"><pre>        self.response = self.finalize_response(request, response, *args, **kwargs)</pre></li>
                  
                  <li onclick="toggle('pre2002739057408', 'post2002739057408')"><pre>        return self.response</pre></li>
                  
              </ol>
              
            </div>
          

          
            
              <details>
                <summary class="commands">Local vars</summary>
            
            <table class="vars" id="v2002739057408">
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                
                  <tr>
                    <td>args</td>
                    <td class="code"><pre>()</pre></td>
                  </tr>
                
                  <tr>
                    <td>handler</td>
                    <td class="code"><pre>&lt;bound method ProjectMarkdown.get of &lt;api.views.ProjectMarkdown object at 0x000001D24C86B590&gt;&gt;</pre></td>
                  </tr>
                
                  <tr>
                    <td>kwargs</td>
                    <td class="code"><pre>{}</pre></td>
                  </tr>
                
                  <tr>
                    <td>request</td>
                    <td class="code"><pre>&lt;rest_framework.request.Request: GET &#x27;/project-markdown/?repo=https://github.com/darideveloper/travel-agency&#x27;&gt;</pre></td>
                  </tr>
                
                  <tr>
                    <td>self</td>
                    <td class="code"><pre>&lt;api.views.ProjectMarkdown object at 0x000001D24C86B590&gt;</pre></td>
                  </tr>
                
              </tbody>
            </table>
            </details>
          
        </li>
      
        
        <li class="frame user">
          
            <code class="fname">E:full stackportfolio_2.0portfolio-django-api-restapiviews.py</code>, line 69, in get
          

          
            <div class="context" id="c2002739056896">
              
                <ol start="62" class="pre-context" id="pre2002739056896">
                
                  <li onclick="toggle('pre2002739056896', 'post2002739056896')"><pre>        </pre></li>
                
                  <li onclick="toggle('pre2002739056896', 'post2002739056896')"><pre>        # Get repo url from request</pre></li>
                
                  <li onclick="toggle('pre2002739056896', 'post2002739056896')"><pre>        repo = request.GET.get(&quot;repo&quot;)</pre></li>
                
                  <li onclick="toggle('pre2002739056896', 'post2002739056896')"><pre>        if not repo:</pre></li>
                
                  <li onclick="toggle('pre2002739056896', 'post2002739056896')"><pre>            return response.Response(&quot;No repo url provided&quot;)</pre></li>
                
                  <li onclick="toggle('pre2002739056896', 'post2002739056896')"><pre>        </pre></li>
                
                  <li onclick="toggle('pre2002739056896', 'post2002739056896')"><pre>        # Get project</pre></li>
                
                </ol>
              
              <ol start="69" class="context-line">
                <li onclick="toggle('pre2002739056896', 'post2002739056896')"><pre>        project = models.Project.objects.get(repo=repo)</pre> <span>â¦</span></li>
              </ol>
              
                <ol start='70' class="post-context" id="post2002739056896">
                  
                  <li onclick="toggle('pre2002739056896', 'post2002739056896')"><pre>        if not project:</pre></li>
                  
                  <li onclick="toggle('pre2002739056896', 'post2002739056896')"><pre>            return response.Response(&quot;Project not found&quot;)</pre></li>
                  
                  <li onclick="toggle('pre2002739056896', 'post2002739056896')"><pre>        </pre></li>
                  
                  <li onclick="toggle('pre2002739056896', 'post2002739056896')"><pre>        # Get markdown</pre></li>
                  
                  <li onclick="toggle('pre2002739056896', 'post2002739056896')"><pre>        markdown_generator = tools.MarkdonGenerator(project.id)</pre></li>
                  
                  <li onclick="toggle('pre2002739056896', 'post2002739056896')"><pre>        markdown = markdown_generator.get_markdown()</pre></li>
                  
              </ol>
              
            </div>
          

          
            
              <details>
                <summary class="commands">Local vars</summary>
            
            <table class="vars" id="v2002739056896">
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                
                  <tr>
                    <td>format</td>
                    <td class="code"><pre>None</pre></td>
                  </tr>
                
                  <tr>
                    <td>repo</td>
                    <td class="code"><pre>&#x27;https://github.com/darideveloper/travel-agency&#x27;</pre></td>
                  </tr>
                
                  <tr>
                    <td>request</td>
                    <td class="code"><pre>&lt;rest_framework.request.Request: GET &#x27;/project-markdown/?repo=https://github.com/darideveloper/travel-agency&#x27;&gt;</pre></td>
                  </tr>
                
                  <tr>
                    <td>self</td>
                    <td class="code"><pre>&lt;api.views.ProjectMarkdown object at 0x000001D24C86B590&gt;</pre></td>
                  </tr>
                
              </tbody>
            </table>
            </details>
          
        </li>
      
        
        <li class="frame django">
          
            <code class="fname">E:full stackportfolio_2.0portfolio-django-api-restvenvLibsite-packagesdjangodbmodelsmanager.py</code>, line 85, in manager_method
          

          
            <div class="context" id="c2002739058240">
              
                <ol start="78" class="pre-context" id="pre2002739058240">
                
                  <li onclick="toggle('pre2002739058240', 'post2002739058240')"><pre>    def check(self, **kwargs):</pre></li>
                
                  <li onclick="toggle('pre2002739058240', 'post2002739058240')"><pre>        return []</pre></li>
                
                  <li onclick="toggle('pre2002739058240', 'post2002739058240')"><pre></pre></li>
                
                  <li onclick="toggle('pre2002739058240', 'post2002739058240')"><pre>    @classmethod</pre></li>
                
                  <li onclick="toggle('pre2002739058240', 'post2002739058240')"><pre>    def _get_queryset_methods(cls, queryset_class):</pre></li>
                
                  <li onclick="toggle('pre2002739058240', 'post2002739058240')"><pre>        def create_method(name, method):</pre></li>
                
                  <li onclick="toggle('pre2002739058240', 'post2002739058240')"><pre>            def manager_method(self, *args, **kwargs):</pre></li>
                
                </ol>
              
              <ol start="85" class="context-line">
                <li onclick="toggle('pre2002739058240', 'post2002739058240')"><pre>                return getattr(self.get_queryset(), name)(*args, **kwargs)</pre> <span>â¦</span></li>
              </ol>
              
                <ol start='86' class="post-context" id="post2002739058240">
                  
                  <li onclick="toggle('pre2002739058240', 'post2002739058240')"><pre></pre></li>
                  
                  <li onclick="toggle('pre2002739058240', 'post2002739058240')"><pre>            manager_method.__name__ = method.__name__</pre></li>
                  
                  <li onclick="toggle('pre2002739058240', 'post2002739058240')"><pre>            manager_method.__doc__ = method.__doc__</pre></li>
                  
                  <li onclick="toggle('pre2002739058240', 'post2002739058240')"><pre>            return manager_method</pre></li>
                  
                  <li onclick="toggle('pre2002739058240', 'post2002739058240')"><pre></pre></li>
                  
                  <li onclick="toggle('pre2002739058240', 'post2002739058240')"><pre>        new_methods = {}</pre></li>
                  
              </ol>
              
            </div>
          

          
            
              <details>
                <summary class="commands">Local vars</summary>
            
            <table class="vars" id="v2002739058240">
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                
                  <tr>
                    <td>args</td>
                    <td class="code"><pre>()</pre></td>
                  </tr>
                
                  <tr>
                    <td>kwargs</td>
                    <td class="code"><pre>{&#x27;repo&#x27;: &#x27;https://github.com/darideveloper/travel-agency&#x27;}</pre></td>
                  </tr>
                
                  <tr>
                    <td>name</td>
                    <td class="code"><pre>&#x27;get&#x27;</pre></td>
                  </tr>
                
                  <tr>
                    <td>self</td>
                    <td class="code"><pre>&lt;django.db.models.manager.Manager object at 0x000001D24C23B7D0&gt;</pre></td>
                  </tr>
                
              </tbody>
            </table>
            </details>
          
        </li>
      
        
        <li class="frame django">
          
            <code class="fname">E:full stackportfolio_2.0portfolio-django-api-restvenvLibsite-packagesdjangodbmodelsquery.py</code>, line 496, in get
          

          
            <div class="context" id="c2002739066176">
              
                <ol start="489" class="pre-context" id="pre2002739066176">
                
                  <li onclick="toggle('pre2002739066176', 'post2002739066176')"><pre>        ):</pre></li>
                
                  <li onclick="toggle('pre2002739066176', 'post2002739066176')"><pre>            limit = MAX_GET_RESULTS</pre></li>
                
                  <li onclick="toggle('pre2002739066176', 'post2002739066176')"><pre>            clone.query.set_limits(high=limit)</pre></li>
                
                  <li onclick="toggle('pre2002739066176', 'post2002739066176')"><pre>        num = len(clone)</pre></li>
                
                  <li onclick="toggle('pre2002739066176', 'post2002739066176')"><pre>        if num == 1:</pre></li>
                
                  <li onclick="toggle('pre2002739066176', 'post2002739066176')"><pre>            return clone._result_cache[0]</pre></li>
                
                  <li onclick="toggle('pre2002739066176', 'post2002739066176')"><pre>        if not num:</pre></li>
                
                </ol>
              
              <ol start="496" class="context-line">
                <li onclick="toggle('pre2002739066176', 'post2002739066176')"><pre>            raise self.model.DoesNotExist(</pre> <span>â¦</span></li>
              </ol>
              
                <ol start='497' class="post-context" id="post2002739066176">
                  
                  <li onclick="toggle('pre2002739066176', 'post2002739066176')"><pre>                &quot;%s matching query does not exist.&quot; % self.model._meta.object_name</pre></li>
                  
                  <li onclick="toggle('pre2002739066176', 'post2002739066176')"><pre>            )</pre></li>
                  
                  <li onclick="toggle('pre2002739066176', 'post2002739066176')"><pre>        raise self.model.MultipleObjectsReturned(</pre></li>
                  
                  <li onclick="toggle('pre2002739066176', 'post2002739066176')"><pre>            &quot;get() returned more than one %s -- it returned %s!&quot;</pre></li>
                  
                  <li onclick="toggle('pre2002739066176', 'post2002739066176')"><pre>            % (</pre></li>
                  
                  <li onclick="toggle('pre2002739066176', 'post2002739066176')"><pre>                self.model._meta.object_name,</pre></li>
                  
              </ol>
              
            </div>
          

          
            
              <details>
                <summary class="commands">Local vars</summary>
            
            <table class="vars" id="v2002739066176">
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                
                  <tr>
                    <td>args</td>
                    <td class="code"><pre>()</pre></td>
                  </tr>
                
                  <tr>
                    <td>clone</td>
                    <td class="code"><pre>&lt;QuerySet []&gt;</pre></td>
                  </tr>
                
                  <tr>
                    <td>kwargs</td>
                    <td class="code"><pre>{&#x27;repo&#x27;: &#x27;https://github.com/darideveloper/travel-agency&#x27;}</pre></td>
                  </tr>
                
                  <tr>
                    <td>limit</td>
                    <td class="code"><pre>21</pre></td>
                  </tr>
                
                  <tr>
                    <td>num</td>
                    <td class="code"><pre>0</pre></td>
                  </tr>
                
                  <tr>
                    <td>self</td>
                    <td class="code"><pre>&lt;QuerySet [&lt;Project: Joe Manfred&gt;, &lt;Project: SNIIM Extractor&gt;, &lt;Project: Lawn Tek Bot&gt;, &lt;Project: Portfolio 1.0&gt;, &lt;Project: Dari Dev Blog&gt;, &lt;Project: Ohio Health MD&gt;, &lt;Project: First In Flight Network&gt;, &lt;Project: Mytradinglicks Notifier&gt;, &lt;Project: Yoga Studio&gt;, &lt;Project: WebLeague&gt;, &lt;Project: Cryptocurrency WebApp&gt;, &lt;Project: Buenos Aires Aire Acondicionado&gt;, &lt;Project: Twitch Chat Reader&gt;, &lt;Project: Instagram Bot&gt;, &lt;Project: Video Post&gt;, &lt;Project: Travel Agency&gt;, &lt;Project: XYMale Barbershop&gt;, &lt;Project: Couponscorpion Notifier&gt;, &lt;Project: Ragingbull Notifier&gt;, &lt;Project: LinkedIn Jobs Scraper&gt;, &#x27;...(remaining elements truncated)...&#x27;]&gt;</pre></td>
                  </tr>
                
              </tbody>
            </table>
            </details>
          
        </li>
      
    </ul>
  </div>

  <form action="https://dpaste.com/" name="pasteform" id="pasteform" method="post">
  <div id="pastebinTraceback" class="pastebin">
    <input type="hidden" name="language" value="PythonConsole">
    <input type="hidden" name="title"
      value="DoesNotExist at /project-markdown/">
    <input type="hidden" name="source" value="Django Dpaste Agent">
    <input type="hidden" name="poster" value="Django">
    <textarea name="content" id="traceback_area" cols="140" rows="25">
Environment:


Request Method: GET
Request URL: http://127.0.0.1:8000/project-markdown/?repo=https://github.com/darideveloper/travel-agency

Django Version: 4.0.4
Python Version: 3.11.1
Installed Applications:
[&#x27;api&#x27;,
 &#x27;rest_framework&#x27;,
 &#x27;rest_framework.authtoken&#x27;,
 &#x27;django.contrib.admin&#x27;,
 &#x27;django.contrib.auth&#x27;,
 &#x27;django.contrib.contenttypes&#x27;,
 &#x27;django.contrib.sessions&#x27;,
 &#x27;django.contrib.messages&#x27;,
 &#x27;django.contrib.staticfiles&#x27;]
Installed Middleware:
(&#x27;whitenoise.middleware.WhiteNoiseMiddleware&#x27;,
 &#x27;whitenoise.middleware.WhiteNoiseMiddleware&#x27;,
 &#x27;django.middleware.security.SecurityMiddleware&#x27;,
 &#x27;django.contrib.sessions.middleware.SessionMiddleware&#x27;,
 &#x27;django.middleware.common.CommonMiddleware&#x27;,
 &#x27;django.middleware.csrf.CsrfViewMiddleware&#x27;,
 &#x27;django.contrib.auth.middleware.AuthenticationMiddleware&#x27;,
 &#x27;django.contrib.messages.middleware.MessageMiddleware&#x27;,
 &#x27;django.middleware.clickjacking.XFrameOptionsMiddleware&#x27;)



Traceback (most recent call last):
  File "E:full stackportfolio_2.0portfolio-django-api-restvenvLibsite-packagesdjangocorehandlersexception.py", line 55, in inner
    response = get_response(request)
  File "E:full stackportfolio_2.0portfolio-django-api-restvenvLibsite-packagesdjangocorehandlersbase.py", line 197, in _get_response
    response = wrapped_callback(request, *callback_args, **callback_kwargs)
  File "E:full stackportfolio_2.0portfolio-django-api-restvenvLibsite-packagesdjangoviewsdecoratorscsrf.py", line 54, in wrapped_view
    return view_func(*args, **kwargs)
  File "E:full stackportfolio_2.0portfolio-django-api-restvenvLibsite-packagesdjangoviewsgenericbase.py", line 84, in view
    return self.dispatch(request, *args, **kwargs)
  File "E:full stackportfolio_2.0portfolio-django-api-restest_frameworkviews.py", line 509, in dispatch
    response = self.handle_exception(exc)
  File "E:full stackportfolio_2.0portfolio-django-api-restest_frameworkviews.py", line 469, in handle_exception
    self.raise_uncaught_exception(exc)
  File "E:full stackportfolio_2.0portfolio-django-api-restest_frameworkviews.py", line 480, in raise_uncaught_exception
    raise exc
  File "E:full stackportfolio_2.0portfolio-django-api-restest_frameworkviews.py", line 506, in dispatch
    response = handler(request, *args, **kwargs)
  File "E:full stackportfolio_2.0portfolio-django-api-restapiviews.py", line 69, in get
    project = models.Project.objects.get(repo=repo)
  File "E:full stackportfolio_2.0portfolio-django-api-restvenvLibsite-packagesdjangodbmodelsmanager.py", line 85, in manager_method
    return getattr(self.get_queryset(), name)(*args, **kwargs)
  File "E:full stackportfolio_2.0portfolio-django-api-restvenvLibsite-packagesdjangodbmodelsquery.py", line 496, in get
    raise self.model.DoesNotExist(

Exception Type: DoesNotExist at /project-markdown/
Exception Value: Project matching query does not exist.
</textarea>
  <br><br>
  <input type="submit" value="Share this traceback on a public website">
  </div>
</form>

</div>


<div id="requestinfo">
  <h2>Request information</h2>


  
    <h3 id="user-info">USER</h3>
    <p>AnonymousUser</p>
  

  <h3 id="get-info">GET</h3>
  
    <table class="req">
      <thead>
        <tr>
          <th>Variable</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        
          <tr>
            <td>repo</td>
            <td class="code"><pre>&#x27;https://github.com/darideveloper/travel-agency&#x27;</pre></td>
          </tr>
        
      </tbody>
    </table>
  

  <h3 id="post-info">POST</h3>
  
    <p>No POST data</p>
  
  <h3 id="files-info">FILES</h3>
  
    <p>No FILES data</p>
  


  <h3 id="cookie-info">COOKIES</h3>
  
    <p>No cookie data</p>
  

  <h3 id="meta-info">META</h3>
  <table class="req">
    <thead>
      <tr>
        <th>Variable</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      
        <tr>
          <td>ALLUSERSPROFILE</td>
          <td class="code"><pre>&#x27;C:ProgramData&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>APPDATA</td>
          <td class="code"><pre>&#x27;C:UsersdariaAppDataRoaming&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>CHOCOLATEYINSTALL</td>
          <td class="code"><pre>&#x27;C:ProgramDatachocolatey&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>CHOCOLATEYLASTPATHUPDATE</td>
          <td class="code"><pre>&#x27;132980071400374923&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>CHROME_CRASHPAD_PIPE_NAME</td>
          <td class="code"><pre>&#x27;.pipeLOCALcrashpad_10804_HDZAKUOQWVDBQPDL&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>COLORTERM</td>
          <td class="code"><pre>&#x27;truecolor&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>COMMONPROGRAMFILES</td>
          <td class="code"><pre>&#x27;C:Program FilesCommon Files&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>COMMONPROGRAMFILES(X86)</td>
          <td class="code"><pre>&#x27;C:Program Files (x86)Common Files&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>COMMONPROGRAMW6432</td>
          <td class="code"><pre>&#x27;C:Program FilesCommon Files&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>COMPUTERNAME</td>
          <td class="code"><pre>&#x27;DARIDEVPC&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>COMSPEC</td>
          <td class="code"><pre>&#x27;C:Windowssystem32cmd.exe&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>CONTENT_LENGTH</td>
          <td class="code"><pre>&#x27;&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>CONTENT_TYPE</td>
          <td class="code"><pre>&#x27;text/plain&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>DB_ENGINE</td>
          <td class="code"><pre>&#x27;django.db.backends.postgresql&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>DB_HOST</td>
          <td class="code"><pre>&#x27;dpg-cef3eqsgqg4b3haa6eq0-a.ohio-postgres.render.com&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>DB_NAME</td>
          <td class="code"><pre>&#x27;portfolio&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>DB_PASSWORD</td>
          <td class="code"><pre>&#x27;********************&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>DB_PORT</td>
          <td class="code"><pre>&#x27;5432&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>DB_USER</td>
          <td class="code"><pre>&#x27;daridev&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>DEBUG</td>
          <td class="code"><pre>&#x27;True&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>DJANGO_SETTINGS_MODULE</td>
          <td class="code"><pre>&#x27;portfolio.settings&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>DRIVERDATA</td>
          <td class="code"><pre>&#x27;C:WindowsSystem32DriversDriverData&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>FPS_BROWSER_APP_PROFILE_STRING</td>
          <td class="code"><pre>&#x27;Internet Explorer&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>FPS_BROWSER_USER_PROFILE_STRING</td>
          <td class="code"><pre>&#x27;Default&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>GATEWAY_INTERFACE</td>
          <td class="code"><pre>&#x27;CGI/1.1&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>GIT_ASKPASS</td>
          <td class="code"><pre>&#x27;********************&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>HOMEDRIVE</td>
          <td class="code"><pre>&#x27;C:&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>HOMEPATH</td>
          <td class="code"><pre>&#x27;Usersdaria&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>HTTP_ACCEPT</td>
          <td class="code"><pre>&#x27;*/*&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>HTTP_ACCEPT_ENCODING</td>
          <td class="code"><pre>&#x27;gzip, deflate, br&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>HTTP_CONNECTION</td>
          <td class="code"><pre>&#x27;keep-alive&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>HTTP_HOST</td>
          <td class="code"><pre>&#x27;127.0.0.1:8000&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>HTTP_USER_AGENT</td>
          <td class="code"><pre>&#x27;python-requests/2.28.1&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>LANG</td>
          <td class="code"><pre>&#x27;en_US.UTF-8&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>LOCALAPPDATA</td>
          <td class="code"><pre>&#x27;C:UsersdariaAppDataLocal&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>LOGONSERVER</td>
          <td class="code"><pre>&#x27;DARIDEVPC&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>NUMBER_OF_PROCESSORS</td>
          <td class="code"><pre>&#x27;4&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>ONEDRIVE</td>
          <td class="code"><pre>&#x27;C:UsersdariaOneDrive&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>ONEDRIVECONSUMER</td>
          <td class="code"><pre>&#x27;C:UsersdariaOneDrive&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>OPENSSL_CONF</td>
          <td class="code"><pre>&#x27;C:Program FilesPostgreSQLpsqlODBCetcopenssl.cnf&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>ORIGINAL_XDG_CURRENT_DESKTOP</td>
          <td class="code"><pre>&#x27;undefined&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>OS</td>
          <td class="code"><pre>&#x27;Windows_NT&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>PATH</td>
          <td class="code"><pre>(&#x27;E:full &#x27;
 &#x27;stackportfolio_2.0portfolio-django-api-restvenv/Scripts;C:Program &#x27;
 &#x27;FilesCommon FilesOracleJavajavapath;C:Program &#x27;
 &#x27;FilesPython311Scripts;C:Program &#x27;
 &#x27;FilesPython311;C:ProgramDataOracleJavajavapath;C:Windowssystem32;C:Windows;C:WindowsSystem32Wbem;C:WindowsSystem32WindowsPowerShellv1.0;C:WindowsSystem32OpenSSH;C:ProgramDatachocolateybin;C:Program &#x27;
 &#x27;Files
odejs;C:Program FilesGTK3-Runtime &#x27;
 &#x27;Win64bin;C:UsersdariaAppDataRoamingPythonPython310site-packages;C:Program &#x27;
 &#x27;FilesJavajdk-17.0.5bin;C:UsersdariaAppDataRoamingPythonScripts;C:Program &#x27;
 &#x27;FilesDockerDockeresourcesbin;C:Program Files (x86)Microsoft SQL &#x27;
 &#x27;Server160DTSBinn;C:Program &#x27;
 &#x27;FilesAutoFirmaJAAutoFirmaJA;C:Program FilesGitcmd;C:Program &#x27;
 &#x27;FilesCalibre2;C:Program &#x27;
 &#x27;FilesPuTTY;C:Usersdaria.console-ninja.bin;C:UsersdariaAppDataLocalMicrosoftWindowsApps;C:UsersdariaAppDataLocalProgramsMicrosoft &#x27;
 &#x27;VS Codebin;C:UsersdariaAppDataRoaming
pm;C:Program &#x27;
 &#x27;FilesJetBrainsPyCharm Community Edition 2022.1.3bin;C:Program &#x27;
 &#x27;Filesherokubin;C:UsersdariaAppDataRoamingPythonPython311site-packages;C:UsersdariaAppDataRoamingPythonPython311Scripts;C:Usersdaria.ebcli-virtual-envexecutables;C:Usersdaria.flybin;C:UsersdariaAppDataRoamingPythonScripts;C:Program &#x27;
 &#x27;FilesAzure Data Studiobin;C:Program &#x27;
 &#x27;FilesGoogleChromeApplicationchrome.exe;C:Program &#x27;
 &#x27;FilesPostgreSQL15;C:Program FilesPostgreSQL15lib;&#x27;)</pre></td>
        </tr>
      
        <tr>
          <td>PATHEXT</td>
          <td class="code"><pre>&#x27;.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>PATH_INFO</td>
          <td class="code"><pre>&#x27;/project-markdown/&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>PROCESSOR_ARCHITECTURE</td>
          <td class="code"><pre>&#x27;AMD64&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>PROCESSOR_IDENTIFIER</td>
          <td class="code"><pre>&#x27;Intel64 Family 6 Model 142 Stepping 10, GenuineIntel&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>PROCESSOR_LEVEL</td>
          <td class="code"><pre>&#x27;6&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>PROCESSOR_REVISION</td>
          <td class="code"><pre>&#x27;8e0a&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>PROGRAMDATA</td>
          <td class="code"><pre>&#x27;C:ProgramData&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>PROGRAMFILES</td>
          <td class="code"><pre>&#x27;C:Program Files&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>PROGRAMFILES(X86)</td>
          <td class="code"><pre>&#x27;C:Program Files (x86)&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>PROGRAMW6432</td>
          <td class="code"><pre>&#x27;C:Program Files&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>PS1</td>
          <td class="code"><pre>&quot;&#x27;[e[0m]$[e[0m]&#x27;&quot;</pre></td>
        </tr>
      
        <tr>
          <td>PSMODULEPATH</td>
          <td class="code"><pre>(&#x27;C:UsersdariaOneDriveDocumentosWindowsPowerShellModules;C:Program &#x27;
 &#x27;FilesWindowsPowerShellModules;C:Windowssystem32WindowsPowerShellv1.0Modules&#x27;)</pre></td>
        </tr>
      
        <tr>
          <td>PUBLIC</td>
          <td class="code"><pre>&#x27;C:UsersPublic&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>PYCHARM COMMUNITY EDITION</td>
          <td class="code"><pre>&#x27;C:Program FilesJetBrainsPyCharm Community Edition 2022.1.3bin;&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>QUERY_STRING</td>
          <td class="code"><pre>&#x27;repo=https://github.com/darideveloper/travel-agency&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>REMOTE_ADDR</td>
          <td class="code"><pre>&#x27;127.0.0.1&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>REMOTE_HOST</td>
          <td class="code"><pre>&#x27;&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>REQUEST_METHOD</td>
          <td class="code"><pre>&#x27;GET&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>RUN_MAIN</td>
          <td class="code"><pre>&#x27;true&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SCRIPT_NAME</td>
          <td class="code"><pre>&#x27;&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SECRET_KEY</td>
          <td class="code"><pre>&#x27;********************&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SERVER_NAME</td>
          <td class="code"><pre>&#x27;site.test&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SERVER_PORT</td>
          <td class="code"><pre>&#x27;8000&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SERVER_PROTOCOL</td>
          <td class="code"><pre>&#x27;HTTP/1.1&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SERVER_SOFTWARE</td>
          <td class="code"><pre>&#x27;WSGIServer/0.2&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SESSIONNAME</td>
          <td class="code"><pre>&#x27;Console&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SYSTEMDRIVE</td>
          <td class="code"><pre>&#x27;C:&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SYSTEMROOT</td>
          <td class="code"><pre>&#x27;C:Windows&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>TEMP</td>
          <td class="code"><pre>&#x27;C:UsersdariaAppDataLocalTemp&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>TERM_PROGRAM</td>
          <td class="code"><pre>&#x27;vscode&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>TERM_PROGRAM_VERSION</td>
          <td class="code"><pre>&#x27;1.78.2&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>TMP</td>
          <td class="code"><pre>&#x27;C:UsersdariaAppDataLocalTemp&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>USERDOMAIN</td>
          <td class="code"><pre>&#x27;DARIDEVPC&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>USERDOMAIN_ROAMINGPROFILE</td>
          <td class="code"><pre>&#x27;DARIDEVPC&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>USERNAME</td>
          <td class="code"><pre>&#x27;daria&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>USERPROFILE</td>
          <td class="code"><pre>&#x27;C:Usersdaria&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>VBOX_MSI_INSTALL_PATH</td>
          <td class="code"><pre>&#x27;C:Program FilesOracleVirtualBox&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>VIRTUAL_ENV</td>
          <td class="code"><pre>&#x27;E:full stackportfolio_2.0portfolio-django-api-restvenv&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>VSCODE_GIT_ASKPASS_EXTRA_ARGS</td>
          <td class="code"><pre>&#x27;********************&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>VSCODE_GIT_ASKPASS_MAIN</td>
          <td class="code"><pre>&#x27;********************&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>VSCODE_GIT_ASKPASS_NODE</td>
          <td class="code"><pre>&#x27;********************&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>VSCODE_GIT_IPC_HANDLE</td>
          <td class="code"><pre>&#x27;.pipevscode-git-9791aee4c4-sock&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>VSCODE_INJECTION</td>
          <td class="code"><pre>&#x27;1&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>WINDIR</td>
          <td class="code"><pre>&#x27;C:Windows&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>ZES_ENABLE_SYSMAN</td>
          <td class="code"><pre>&#x27;1&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>wsgi.errors</td>
          <td class="code"><pre>&lt;_io.TextIOWrapper name=&#x27;&lt;stderr&gt;&#x27; mode=&#x27;w&#x27; encoding=&#x27;utf-8&#x27;&gt;</pre></td>
        </tr>
      
        <tr>
          <td>wsgi.file_wrapper</td>
          <td class="code"><pre>&lt;class &#x27;wsgiref.util.FileWrapper&#x27;&gt;</pre></td>
        </tr>
      
        <tr>
          <td>wsgi.input</td>
          <td class="code"><pre>&lt;django.core.handlers.wsgi.LimitedStream object at 0x000001D24C8B14D0&gt;</pre></td>
        </tr>
      
        <tr>
          <td>wsgi.multiprocess</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>wsgi.multithread</td>
          <td class="code"><pre>True</pre></td>
        </tr>
      
        <tr>
          <td>wsgi.run_once</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>wsgi.url_scheme</td>
          <td class="code"><pre>&#x27;http&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>wsgi.version</td>
          <td class="code"><pre>(1, 0)</pre></td>
        </tr>
      
    </tbody>
  </table>


  <h3 id="settings-info">Settings</h3>
  <h4>Using settings module <code>portfolio.settings</code></h4>
  <table class="req">
    <thead>
      <tr>
        <th>Setting</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      
        <tr>
          <td>ABSOLUTE_URL_OVERRIDES</td>
          <td class="code"><pre>{}</pre></td>
        </tr>
      
        <tr>
          <td>ADMINS</td>
          <td class="code"><pre>[]</pre></td>
        </tr>
      
        <tr>
          <td>ALLOWED_HOSTS</td>
          <td class="code"><pre>[&#x27;*&#x27;]</pre></td>
        </tr>
      
        <tr>
          <td>APPEND_SLASH</td>
          <td class="code"><pre>True</pre></td>
        </tr>
      
        <tr>
          <td>AUTHENTICATION_BACKENDS</td>
          <td class="code"><pre>[&#x27;django.contrib.auth.backends.ModelBackend&#x27;]</pre></td>
        </tr>
      
        <tr>
          <td>AUTH_PASSWORD_VALIDATORS</td>
          <td class="code"><pre>&#x27;********************&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>AUTH_USER_MODEL</td>
          <td class="code"><pre>&#x27;auth.User&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>BASE_DIR</td>
          <td class="code"><pre>&#x27;E:full stackportfolio_2.0portfolio-django-api-rest&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>CACHES</td>
          <td class="code"><pre>{&#x27;default&#x27;: {&#x27;BACKEND&#x27;: &#x27;django.core.cache.backends.locmem.LocMemCache&#x27;}}</pre></td>
        </tr>
      
        <tr>
          <td>CACHE_MIDDLEWARE_ALIAS</td>
          <td class="code"><pre>&#x27;default&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>CACHE_MIDDLEWARE_KEY_PREFIX</td>
          <td class="code"><pre>&#x27;********************&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>CACHE_MIDDLEWARE_SECONDS</td>
          <td class="code"><pre>600</pre></td>
        </tr>
      
        <tr>
          <td>CSRF_COOKIE_AGE</td>
          <td class="code"><pre>31449600</pre></td>
        </tr>
      
        <tr>
          <td>CSRF_COOKIE_DOMAIN</td>
          <td class="code"><pre>None</pre></td>
        </tr>
      
        <tr>
          <td>CSRF_COOKIE_HTTPONLY</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>CSRF_COOKIE_NAME</td>
          <td class="code"><pre>&#x27;csrftoken&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>CSRF_COOKIE_PATH</td>
          <td class="code"><pre>&#x27;/&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>CSRF_COOKIE_SAMESITE</td>
          <td class="code"><pre>&#x27;Lax&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>CSRF_COOKIE_SECURE</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>CSRF_FAILURE_VIEW</td>
          <td class="code"><pre>&#x27;django.views.csrf.csrf_failure&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>CSRF_HEADER_NAME</td>
          <td class="code"><pre>&#x27;HTTP_X_CSRFTOKEN&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>CSRF_TRUSTED_ORIGINS</td>
          <td class="code"><pre>[]</pre></td>
        </tr>
      
        <tr>
          <td>CSRF_USE_SESSIONS</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>DATABASES</td>
          <td class="code"><pre>{&#x27;default&#x27;: {&#x27;ATOMIC_REQUESTS&#x27;: False,
             &#x27;AUTOCOMMIT&#x27;: True,
             &#x27;CONN_MAX_AGE&#x27;: 0,
             &#x27;ENGINE&#x27;: &#x27;django.db.backends.postgresql&#x27;,
             &#x27;HOST&#x27;: &#x27;dpg-cef3eqsgqg4b3haa6eq0-a.ohio-postgres.render.com&#x27;,
             &#x27;NAME&#x27;: &#x27;portfolio&#x27;,
             &#x27;OPTIONS&#x27;: {},
             &#x27;PASSWORD&#x27;: &#x27;********************&#x27;,
             &#x27;PORT&#x27;: &#x27;5432&#x27;,
             &#x27;TEST&#x27;: {&#x27;CHARSET&#x27;: None,
                      &#x27;COLLATION&#x27;: None,
                      &#x27;MIGRATE&#x27;: True,
                      &#x27;MIRROR&#x27;: None,
                      &#x27;NAME&#x27;: None},
             &#x27;TIME_ZONE&#x27;: None,
             &#x27;USER&#x27;: &#x27;daridev&#x27;}}</pre></td>
        </tr>
      
        <tr>
          <td>DATABASE_ROUTERS</td>
          <td class="code"><pre>[]</pre></td>
        </tr>
      
        <tr>
          <td>DATA_UPLOAD_MAX_MEMORY_SIZE</td>
          <td class="code"><pre>2621440</pre></td>
        </tr>
      
        <tr>
          <td>DATA_UPLOAD_MAX_NUMBER_FIELDS</td>
          <td class="code"><pre>1000</pre></td>
        </tr>
      
        <tr>
          <td>DATETIME_FORMAT</td>
          <td class="code"><pre>&#x27;N j, Y, P&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>DATETIME_INPUT_FORMATS</td>
          <td class="code"><pre>[&#x27;%Y-%m-%d %H:%M:%S&#x27;,
 &#x27;%Y-%m-%d %H:%M:%S.%f&#x27;,
 &#x27;%Y-%m-%d %H:%M&#x27;,
 &#x27;%m/%d/%Y %H:%M:%S&#x27;,
 &#x27;%m/%d/%Y %H:%M:%S.%f&#x27;,
 &#x27;%m/%d/%Y %H:%M&#x27;,
 &#x27;%m/%d/%y %H:%M:%S&#x27;,
 &#x27;%m/%d/%y %H:%M:%S.%f&#x27;,
 &#x27;%m/%d/%y %H:%M&#x27;]</pre></td>
        </tr>
      
        <tr>
          <td>DATE_FORMAT</td>
          <td class="code"><pre>&#x27;N j, Y&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>DATE_INPUT_FORMATS</td>
          <td class="code"><pre>[&#x27;%Y-%m-%d&#x27;,
 &#x27;%m/%d/%Y&#x27;,
 &#x27;%m/%d/%y&#x27;,
 &#x27;%b %d %Y&#x27;,
 &#x27;%b %d, %Y&#x27;,
 &#x27;%d %b %Y&#x27;,
 &#x27;%d %b, %Y&#x27;,
 &#x27;%B %d %Y&#x27;,
 &#x27;%B %d, %Y&#x27;,
 &#x27;%d %B %Y&#x27;,
 &#x27;%d %B, %Y&#x27;]</pre></td>
        </tr>
      
        <tr>
          <td>DEBUG</td>
          <td class="code"><pre>True</pre></td>
        </tr>
      
        <tr>
          <td>DEBUG_PROPAGATE_EXCEPTIONS</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>DECIMAL_SEPARATOR</td>
          <td class="code"><pre>&#x27;.&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>DEFAULT_AUTO_FIELD</td>
          <td class="code"><pre>&#x27;django.db.models.AutoField&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>DEFAULT_CHARSET</td>
          <td class="code"><pre>&#x27;utf-8&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>DEFAULT_EXCEPTION_REPORTER</td>
          <td class="code"><pre>&#x27;django.views.debug.ExceptionReporter&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>DEFAULT_EXCEPTION_REPORTER_FILTER</td>
          <td class="code"><pre>&#x27;django.views.debug.SafeExceptionReporterFilter&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>DEFAULT_FILE_STORAGE</td>
          <td class="code"><pre>&#x27;django.core.files.storage.FileSystemStorage&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>DEFAULT_FROM_EMAIL</td>
          <td class="code"><pre>&#x27;webmaster@localhost&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>DEFAULT_INDEX_TABLESPACE</td>
          <td class="code"><pre>&#x27;&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>DEFAULT_TABLESPACE</td>
          <td class="code"><pre>&#x27;&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>DISALLOWED_USER_AGENTS</td>
          <td class="code"><pre>[]</pre></td>
        </tr>
      
        <tr>
          <td>EMAIL_BACKEND</td>
          <td class="code"><pre>&#x27;django.core.mail.backends.smtp.EmailBackend&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>EMAIL_HOST</td>
          <td class="code"><pre>&#x27;localhost&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>EMAIL_HOST_PASSWORD</td>
          <td class="code"><pre>&#x27;********************&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>EMAIL_HOST_USER</td>
          <td class="code"><pre>&#x27;&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>EMAIL_PORT</td>
          <td class="code"><pre>25</pre></td>
        </tr>
      
        <tr>
          <td>EMAIL_SSL_CERTFILE</td>
          <td class="code"><pre>None</pre></td>
        </tr>
      
        <tr>
          <td>EMAIL_SSL_KEYFILE</td>
          <td class="code"><pre>&#x27;********************&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>EMAIL_SUBJECT_PREFIX</td>
          <td class="code"><pre>&#x27;[Django] &#x27;</pre></td>
        </tr>
      
        <tr>
          <td>EMAIL_TIMEOUT</td>
          <td class="code"><pre>None</pre></td>
        </tr>
      
        <tr>
          <td>EMAIL_USE_LOCALTIME</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>EMAIL_USE_SSL</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>EMAIL_USE_TLS</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>FILE_UPLOAD_DIRECTORY_PERMISSIONS</td>
          <td class="code"><pre>None</pre></td>
        </tr>
      
        <tr>
          <td>FILE_UPLOAD_HANDLERS</td>
          <td class="code"><pre>[&#x27;django.core.files.uploadhandler.MemoryFileUploadHandler&#x27;,
 &#x27;django.core.files.uploadhandler.TemporaryFileUploadHandler&#x27;]</pre></td>
        </tr>
      
        <tr>
          <td>FILE_UPLOAD_MAX_MEMORY_SIZE</td>
          <td class="code"><pre>2621440</pre></td>
        </tr>
      
        <tr>
          <td>FILE_UPLOAD_PERMISSIONS</td>
          <td class="code"><pre>420</pre></td>
        </tr>
      
        <tr>
          <td>FILE_UPLOAD_TEMP_DIR</td>
          <td class="code"><pre>None</pre></td>
        </tr>
      
        <tr>
          <td>FIRST_DAY_OF_WEEK</td>
          <td class="code"><pre>0</pre></td>
        </tr>
      
        <tr>
          <td>FIXTURE_DIRS</td>
          <td class="code"><pre>[]</pre></td>
        </tr>
      
        <tr>
          <td>FORCE_SCRIPT_NAME</td>
          <td class="code"><pre>None</pre></td>
        </tr>
      
        <tr>
          <td>FORMAT_MODULE_PATH</td>
          <td class="code"><pre>None</pre></td>
        </tr>
      
        <tr>
          <td>FORM_RENDERER</td>
          <td class="code"><pre>&#x27;django.forms.renderers.DjangoTemplates&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>IGNORABLE_404_URLS</td>
          <td class="code"><pre>[]</pre></td>
        </tr>
      
        <tr>
          <td>INSTALLED_APPS</td>
          <td class="code"><pre>[&#x27;api&#x27;,
 &#x27;rest_framework&#x27;,
 &#x27;rest_framework.authtoken&#x27;,
 &#x27;django.contrib.admin&#x27;,
 &#x27;django.contrib.auth&#x27;,
 &#x27;django.contrib.contenttypes&#x27;,
 &#x27;django.contrib.sessions&#x27;,
 &#x27;django.contrib.messages&#x27;,
 &#x27;django.contrib.staticfiles&#x27;]</pre></td>
        </tr>
      
        <tr>
          <td>INTERNAL_IPS</td>
          <td class="code"><pre>[]</pre></td>
        </tr>
      
        <tr>
          <td>LANGUAGES</td>
          <td class="code"><pre>[(&#x27;af&#x27;, &#x27;Afrikaans&#x27;),
 (&#x27;ar&#x27;, &#x27;Arabic&#x27;),
 (&#x27;ar-dz&#x27;, &#x27;Algerian Arabic&#x27;),
 (&#x27;ast&#x27;, &#x27;Asturian&#x27;),
 (&#x27;az&#x27;, &#x27;Azerbaijani&#x27;),
 (&#x27;bg&#x27;, &#x27;Bulgarian&#x27;),
 (&#x27;be&#x27;, &#x27;Belarusian&#x27;),
 (&#x27;bn&#x27;, &#x27;Bengali&#x27;),
 (&#x27;br&#x27;, &#x27;Breton&#x27;),
 (&#x27;bs&#x27;, &#x27;Bosnian&#x27;),
 (&#x27;ca&#x27;, &#x27;Catalan&#x27;),
 (&#x27;cs&#x27;, &#x27;Czech&#x27;),
 (&#x27;cy&#x27;, &#x27;Welsh&#x27;),
 (&#x27;da&#x27;, &#x27;Danish&#x27;),
 (&#x27;de&#x27;, &#x27;German&#x27;),
 (&#x27;dsb&#x27;, &#x27;Lower Sorbian&#x27;),
 (&#x27;el&#x27;, &#x27;Greek&#x27;),
 (&#x27;en&#x27;, &#x27;English&#x27;),
 (&#x27;en-au&#x27;, &#x27;Australian English&#x27;),
 (&#x27;en-gb&#x27;, &#x27;British English&#x27;),
 (&#x27;eo&#x27;, &#x27;Esperanto&#x27;),
 (&#x27;es&#x27;, &#x27;Spanish&#x27;),
 (&#x27;es-ar&#x27;, &#x27;Argentinian Spanish&#x27;),
 (&#x27;es-co&#x27;, &#x27;Colombian Spanish&#x27;),
 (&#x27;es-mx&#x27;, &#x27;Mexican Spanish&#x27;),
 (&#x27;es-ni&#x27;, &#x27;Nicaraguan Spanish&#x27;),
 (&#x27;es-ve&#x27;, &#x27;Venezuelan Spanish&#x27;),
 (&#x27;et&#x27;, &#x27;Estonian&#x27;),
 (&#x27;eu&#x27;, &#x27;Basque&#x27;),
 (&#x27;fa&#x27;, &#x27;Persian&#x27;),
 (&#x27;fi&#x27;, &#x27;Finnish&#x27;),
 (&#x27;fr&#x27;, &#x27;French&#x27;),
 (&#x27;fy&#x27;, &#x27;Frisian&#x27;),
 (&#x27;ga&#x27;, &#x27;Irish&#x27;),
 (&#x27;gd&#x27;, &#x27;Scottish Gaelic&#x27;),
 (&#x27;gl&#x27;, &#x27;Galician&#x27;),
 (&#x27;he&#x27;, &#x27;Hebrew&#x27;),
 (&#x27;hi&#x27;, &#x27;Hindi&#x27;),
 (&#x27;hr&#x27;, &#x27;Croatian&#x27;),
 (&#x27;hsb&#x27;, &#x27;Upper Sorbian&#x27;),
 (&#x27;hu&#x27;, &#x27;Hungarian&#x27;),
 (&#x27;hy&#x27;, &#x27;Armenian&#x27;),
 (&#x27;ia&#x27;, &#x27;Interlingua&#x27;),
 (&#x27;id&#x27;, &#x27;Indonesian&#x27;),
 (&#x27;ig&#x27;, &#x27;Igbo&#x27;),
 (&#x27;io&#x27;, &#x27;Ido&#x27;),
 (&#x27;is&#x27;, &#x27;Icelandic&#x27;),
 (&#x27;it&#x27;, &#x27;Italian&#x27;),
 (&#x27;ja&#x27;, &#x27;Japanese&#x27;),
 (&#x27;ka&#x27;, &#x27;Georgian&#x27;),
 (&#x27;kab&#x27;, &#x27;Kabyle&#x27;),
 (&#x27;kk&#x27;, &#x27;Kazakh&#x27;),
 (&#x27;km&#x27;, &#x27;Khmer&#x27;),
 (&#x27;kn&#x27;, &#x27;Kannada&#x27;),
 (&#x27;ko&#x27;, &#x27;Korean&#x27;),
 (&#x27;ky&#x27;, &#x27;Kyrgyz&#x27;),
 (&#x27;lb&#x27;, &#x27;Luxembourgish&#x27;),
 (&#x27;lt&#x27;, &#x27;Lithuanian&#x27;),
 (&#x27;lv&#x27;, &#x27;Latvian&#x27;),
 (&#x27;mk&#x27;, &#x27;Macedonian&#x27;),
 (&#x27;ml&#x27;, &#x27;Malayalam&#x27;),
 (&#x27;mn&#x27;, &#x27;Mongolian&#x27;),
 (&#x27;mr&#x27;, &#x27;Marathi&#x27;),
 (&#x27;ms&#x27;, &#x27;Malay&#x27;),
 (&#x27;my&#x27;, &#x27;Burmese&#x27;),
 (&#x27;nb&#x27;, &#x27;Norwegian BokmÃ¥l&#x27;),
 (&#x27;ne&#x27;, &#x27;Nepali&#x27;),
 (&#x27;nl&#x27;, &#x27;Dutch&#x27;),
 (&#x27;nn&#x27;, &#x27;Norwegian Nynorsk&#x27;),
 (&#x27;os&#x27;, &#x27;Ossetic&#x27;),
 (&#x27;pa&#x27;, &#x27;Punjabi&#x27;),
 (&#x27;pl&#x27;, &#x27;Polish&#x27;),
 (&#x27;pt&#x27;, &#x27;Portuguese&#x27;),
 (&#x27;pt-br&#x27;, &#x27;Brazilian Portuguese&#x27;),
 (&#x27;ro&#x27;, &#x27;Romanian&#x27;),
 (&#x27;ru&#x27;, &#x27;Russian&#x27;),
 (&#x27;sk&#x27;, &#x27;Slovak&#x27;),
 (&#x27;sl&#x27;, &#x27;Slovenian&#x27;),
 (&#x27;sq&#x27;, &#x27;Albanian&#x27;),
 (&#x27;sr&#x27;, &#x27;Serbian&#x27;),
 (&#x27;sr-latn&#x27;, &#x27;Serbian Latin&#x27;),
 (&#x27;sv&#x27;, &#x27;Swedish&#x27;),
 (&#x27;sw&#x27;, &#x27;Swahili&#x27;),
 (&#x27;ta&#x27;, &#x27;Tamil&#x27;),
 (&#x27;te&#x27;, &#x27;Telugu&#x27;),
 (&#x27;tg&#x27;, &#x27;Tajik&#x27;),
 (&#x27;th&#x27;, &#x27;Thai&#x27;),
 (&#x27;tk&#x27;, &#x27;Turkmen&#x27;),
 (&#x27;tr&#x27;, &#x27;Turkish&#x27;),
 (&#x27;tt&#x27;, &#x27;Tatar&#x27;),
 (&#x27;udm&#x27;, &#x27;Udmurt&#x27;),
 (&#x27;uk&#x27;, &#x27;Ukrainian&#x27;),
 (&#x27;ur&#x27;, &#x27;Urdu&#x27;),
 (&#x27;uz&#x27;, &#x27;Uzbek&#x27;),
 (&#x27;vi&#x27;, &#x27;Vietnamese&#x27;),
 (&#x27;zh-hans&#x27;, &#x27;Simplified Chinese&#x27;),
 (&#x27;zh-hant&#x27;, &#x27;Traditional Chinese&#x27;)]</pre></td>
        </tr>
      
        <tr>
          <td>LANGUAGES_BIDI</td>
          <td class="code"><pre>[&#x27;he&#x27;, &#x27;ar&#x27;, &#x27;ar-dz&#x27;, &#x27;fa&#x27;, &#x27;ur&#x27;]</pre></td>
        </tr>
      
        <tr>
          <td>LANGUAGE_CODE</td>
          <td class="code"><pre>&#x27;en-us&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>LANGUAGE_COOKIE_AGE</td>
          <td class="code"><pre>None</pre></td>
        </tr>
      
        <tr>
          <td>LANGUAGE_COOKIE_DOMAIN</td>
          <td class="code"><pre>None</pre></td>
        </tr>
      
        <tr>
          <td>LANGUAGE_COOKIE_HTTPONLY</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>LANGUAGE_COOKIE_NAME</td>
          <td class="code"><pre>&#x27;django_language&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>LANGUAGE_COOKIE_PATH</td>
          <td class="code"><pre>&#x27;/&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>LANGUAGE_COOKIE_SAMESITE</td>
          <td class="code"><pre>None</pre></td>
        </tr>
      
        <tr>
          <td>LANGUAGE_COOKIE_SECURE</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>LOCALE_PATHS</td>
          <td class="code"><pre>[]</pre></td>
        </tr>
      
        <tr>
          <td>LOGGING</td>
          <td class="code"><pre>{&#x27;disable_existing_loggers&#x27;: False,
 &#x27;formatters&#x27;: {&#x27;simple&#x27;: {&#x27;format&#x27;: &#x27;%(levelname)s %(message)s&#x27;},
                &#x27;verbose&#x27;: {&#x27;datefmt&#x27;: &#x27;%Y-%m-%d %H:%M:%S&#x27;,
                            &#x27;format&#x27;: &#x27;%(asctime)s [%(process)d] &#x27;
                                      &#x27;[%(levelname)s] pathname=%(pathname)s &#x27;
                                      &#x27;lineno=%(lineno)s funcname=%(funcName)s &#x27;
                                      &#x27;%(message)s&#x27;}},
 &#x27;handlers&#x27;: {&#x27;console&#x27;: {&#x27;class&#x27;: &#x27;logging.StreamHandler&#x27;,
                          &#x27;formatter&#x27;: &#x27;verbose&#x27;,
                          &#x27;level&#x27;: &#x27;DEBUG&#x27;},
              &#x27;null&#x27;: {&#x27;class&#x27;: &#x27;logging.NullHandler&#x27;, &#x27;level&#x27;: &#x27;DEBUG&#x27;}},
 &#x27;loggers&#x27;: {&#x27;testlogger&#x27;: {&#x27;handlers&#x27;: [&#x27;console&#x27;], &#x27;level&#x27;: &#x27;INFO&#x27;}},
 &#x27;version&#x27;: 1}</pre></td>
        </tr>
      
        <tr>
          <td>LOGGING_CONFIG</td>
          <td class="code"><pre>&#x27;logging.config.dictConfig&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>LOGIN_REDIRECT_URL</td>
          <td class="code"><pre>&#x27;/accounts/profile/&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>LOGIN_URL</td>
          <td class="code"><pre>&#x27;/accounts/login/&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>LOGOUT_REDIRECT_URL</td>
          <td class="code"><pre>None</pre></td>
        </tr>
      
        <tr>
          <td>MANAGERS</td>
          <td class="code"><pre>[]</pre></td>
        </tr>
      
        <tr>
          <td>MEDIA_ROOT</td>
          <td class="code"><pre>&#x27;&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>MEDIA_URL</td>
          <td class="code"><pre>&#x27;/&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>MESSAGE_STORAGE</td>
          <td class="code"><pre>&#x27;django.contrib.messages.storage.fallback.FallbackStorage&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>MIDDLEWARE</td>
          <td class="code"><pre>(&#x27;whitenoise.middleware.WhiteNoiseMiddleware&#x27;,
 &#x27;whitenoise.middleware.WhiteNoiseMiddleware&#x27;,
 &#x27;django.middleware.security.SecurityMiddleware&#x27;,
 &#x27;django.contrib.sessions.middleware.SessionMiddleware&#x27;,
 &#x27;django.middleware.common.CommonMiddleware&#x27;,
 &#x27;django.middleware.csrf.CsrfViewMiddleware&#x27;,
 &#x27;django.contrib.auth.middleware.AuthenticationMiddleware&#x27;,
 &#x27;django.contrib.messages.middleware.MessageMiddleware&#x27;,
 &#x27;django.middleware.clickjacking.XFrameOptionsMiddleware&#x27;)</pre></td>
        </tr>
      
        <tr>
          <td>MIGRATION_MODULES</td>
          <td class="code"><pre>{}</pre></td>
        </tr>
      
        <tr>
          <td>MONTH_DAY_FORMAT</td>
          <td class="code"><pre>&#x27;F j&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>NUMBER_GROUPING</td>
          <td class="code"><pre>0</pre></td>
        </tr>
      
        <tr>
          <td>PASSWORD_HASHERS</td>
          <td class="code"><pre>&#x27;********************&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>PASSWORD_RESET_TIMEOUT</td>
          <td class="code"><pre>&#x27;********************&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>PREPEND_WWW</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>PROJECT_ROOT</td>
          <td class="code"><pre>&#x27;E:full stackportfolio_2.0portfolio-django-api-rest&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>REST_FRAMEWORK</td>
          <td class="code"><pre>{&#x27;DEFAULT_AUTHENTICATION_CLASSES&#x27;: [&#x27;rest_framework.authentication.TokenAuthentication&#x27;,
                                    &#x27;rest_framework.authentication.BasicAuthentication&#x27;,
                                    &#x27;rest_framework.authentication.SessionAuthentication&#x27;],
 &#x27;DEFAULT_PAGINATION_CLASS&#x27;: &#x27;rest_framework.pagination.LimitOffsetPagination&#x27;,
 &#x27;DEFAULT_PERMISSION_CLASSES&#x27;: [&#x27;rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly&#x27;],
 &#x27;PAGE_SIZE&#x27;: 10}</pre></td>
        </tr>
      
        <tr>
          <td>ROOT_URLCONF</td>
          <td class="code"><pre>&#x27;portfolio.urls&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SECRET_KEY</td>
          <td class="code"><pre>&#x27;********************&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SECURE_CONTENT_TYPE_NOSNIFF</td>
          <td class="code"><pre>True</pre></td>
        </tr>
      
        <tr>
          <td>SECURE_CROSS_ORIGIN_OPENER_POLICY</td>
          <td class="code"><pre>&#x27;same-origin&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SECURE_HSTS_INCLUDE_SUBDOMAINS</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>SECURE_HSTS_PRELOAD</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>SECURE_HSTS_SECONDS</td>
          <td class="code"><pre>0</pre></td>
        </tr>
      
        <tr>
          <td>SECURE_PROXY_SSL_HEADER</td>
          <td class="code"><pre>(&#x27;HTTP_X_FORWARDED_PROTO&#x27;, &#x27;https&#x27;)</pre></td>
        </tr>
      
        <tr>
          <td>SECURE_REDIRECT_EXEMPT</td>
          <td class="code"><pre>[]</pre></td>
        </tr>
      
        <tr>
          <td>SECURE_REFERRER_POLICY</td>
          <td class="code"><pre>&#x27;same-origin&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SECURE_SSL_HOST</td>
          <td class="code"><pre>None</pre></td>
        </tr>
      
        <tr>
          <td>SECURE_SSL_REDIRECT</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>SERVER_EMAIL</td>
          <td class="code"><pre>&#x27;root@localhost&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SESSION_CACHE_ALIAS</td>
          <td class="code"><pre>&#x27;default&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SESSION_COOKIE_AGE</td>
          <td class="code"><pre>1209600</pre></td>
        </tr>
      
        <tr>
          <td>SESSION_COOKIE_DOMAIN</td>
          <td class="code"><pre>None</pre></td>
        </tr>
      
        <tr>
          <td>SESSION_COOKIE_HTTPONLY</td>
          <td class="code"><pre>True</pre></td>
        </tr>
      
        <tr>
          <td>SESSION_COOKIE_NAME</td>
          <td class="code"><pre>&#x27;sessionid&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SESSION_COOKIE_PATH</td>
          <td class="code"><pre>&#x27;/&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SESSION_COOKIE_SAMESITE</td>
          <td class="code"><pre>&#x27;Lax&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SESSION_COOKIE_SECURE</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>SESSION_ENGINE</td>
          <td class="code"><pre>&#x27;django.contrib.sessions.backends.db&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SESSION_EXPIRE_AT_BROWSER_CLOSE</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>SESSION_FILE_PATH</td>
          <td class="code"><pre>None</pre></td>
        </tr>
      
        <tr>
          <td>SESSION_SAVE_EVERY_REQUEST</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>SESSION_SERIALIZER</td>
          <td class="code"><pre>&#x27;django.contrib.sessions.serializers.JSONSerializer&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SETTINGS_MODULE</td>
          <td class="code"><pre>&#x27;portfolio.settings&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SHORT_DATETIME_FORMAT</td>
          <td class="code"><pre>&#x27;m/d/Y P&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SHORT_DATE_FORMAT</td>
          <td class="code"><pre>&#x27;m/d/Y&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SIGNING_BACKEND</td>
          <td class="code"><pre>&#x27;django.core.signing.TimestampSigner&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>SILENCED_SYSTEM_CHECKS</td>
          <td class="code"><pre>[]</pre></td>
        </tr>
      
        <tr>
          <td>STATICFILES_DIRS</td>
          <td class="code"><pre>[&#x27;E:full stackportfolio_2.0portfolio-django-api-reststatic&#x27;]</pre></td>
        </tr>
      
        <tr>
          <td>STATICFILES_FINDERS</td>
          <td class="code"><pre>[&#x27;django.contrib.staticfiles.finders.FileSystemFinder&#x27;,
 &#x27;django.contrib.staticfiles.finders.AppDirectoriesFinder&#x27;]</pre></td>
        </tr>
      
        <tr>
          <td>STATICFILES_STORAGE</td>
          <td class="code"><pre>&#x27;whitenoise.storage.CompressedManifestStaticFilesStorage&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>STATIC_ROOT</td>
          <td class="code"><pre>&#x27;E:full stackportfolio_2.0portfolio-django-api-reststaticfiles&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>STATIC_URL</td>
          <td class="code"><pre>&#x27;/static/&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>TEMPLATES</td>
          <td class="code"><pre>[{&#x27;APP_DIRS&#x27;: True,
  &#x27;BACKEND&#x27;: &#x27;django.template.backends.django.DjangoTemplates&#x27;,
  &#x27;DIRS&#x27;: [],
  &#x27;OPTIONS&#x27;: {&#x27;context_processors&#x27;: [&#x27;django.template.context_processors.debug&#x27;,
                                     &#x27;django.template.context_processors.request&#x27;,
                                     &#x27;django.contrib.auth.context_processors.auth&#x27;,
                                     &#x27;django.contrib.messages.context_processors.messages&#x27;]}}]</pre></td>
        </tr>
      
        <tr>
          <td>TEST_NON_SERIALIZED_APPS</td>
          <td class="code"><pre>[]</pre></td>
        </tr>
      
        <tr>
          <td>TEST_RUNNER</td>
          <td class="code"><pre>&#x27;django.test.runner.DiscoverRunner&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>THOUSAND_SEPARATOR</td>
          <td class="code"><pre>&#x27;,&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>TIME_FORMAT</td>
          <td class="code"><pre>&#x27;P&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>TIME_INPUT_FORMATS</td>
          <td class="code"><pre>[&#x27;%H:%M:%S&#x27;, &#x27;%H:%M:%S.%f&#x27;, &#x27;%H:%M&#x27;]</pre></td>
        </tr>
      
        <tr>
          <td>TIME_ZONE</td>
          <td class="code"><pre>&#x27;America/Mexico_City&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>USE_DEPRECATED_PYTZ</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>USE_I18N</td>
          <td class="code"><pre>True</pre></td>
        </tr>
      
        <tr>
          <td>USE_L10N</td>
          <td class="code"><pre>True</pre></td>
        </tr>
      
        <tr>
          <td>USE_THOUSAND_SEPARATOR</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>USE_TZ</td>
          <td class="code"><pre>True</pre></td>
        </tr>
      
        <tr>
          <td>USE_X_FORWARDED_HOST</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>USE_X_FORWARDED_PORT</td>
          <td class="code"><pre>False</pre></td>
        </tr>
      
        <tr>
          <td>WSGI_APPLICATION</td>
          <td class="code"><pre>&#x27;portfolio.wsgi.application&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>X_FRAME_OPTIONS</td>
          <td class="code"><pre>&#x27;DENY&#x27;</pre></td>
        </tr>
      
        <tr>
          <td>YEAR_MONTH_FORMAT</td>
          <td class="code"><pre>&#x27;F Y&#x27;</pre></td>
        </tr>
      
    </tbody>
  </table>

</div>

  <div id="explanation">
    <p>
      Youâre seeing this error because you have <code>DEBUG = True</code> in your
      Django settings file. Change that to <code>False</code>, and Django will
      display a standard page generated by the handler for this status code.
    </p>
  </div>

</body>
</html>
